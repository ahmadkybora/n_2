const yup = require("yup");
const User = require("@app/models/userModel");
const bcrypt = require("bcrypt");
const tools = require("@utils/tools.js");
// const validateRequest = require("@middlewares/validateRequest");

const loginValidation = async (req, res, next) => {
    const { username, password } = req.body;

    const loginSchema = yup.object({
        body: yup.object({
            username: yup.string()
                .min(2, req.t("min", { name: "username", number: "3" }))
                .max(32)
                .required("required", { name: 'username' }),
            password: yup.string()
                .min(8, req.t("min", { name: 'password', number: '3'}))
                .max(32)
                .required(req.t("required", { name: 'password' })),
        }),
    });

    await loginSchema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      }, { abortEarly: false })
      .then(() => {
        return next();
      })
      .catch((err) => {
        return tools.respMsg(res, 422, err.errors);
    });

    const user = await User.findOne({ username, password });
    if(!user) return tools.respMsg(res, 422, req.t("notFound", { name: "username" }));

    const isCompare = await bcrypt.compare(password, user.password);
    if(!isCompare) return tools.respMsg(res, 422, req.t("notFound", { name: "username" }));

    next();
}    

const registerValidation = async (req, res, next) => {
    const { username, email } = req.body;

    const registerSchema = yup.object({
        body: yup.object({
            username: yup.string()
                .min(3, req.t("min", { name: "username", number: "3" }))
                .max(32)
                .required(req.t("required", { name: 'username' })),
            email: yup.string()
                .email()
                .required(req.t(req.t("required", { name: 'email' }))),
            password: yup.string()
                .min(5, req.t("min", { name: 'password', number: '3'}))
                .max(32)
                .required(req.t("required", { name: 'password' })),
            confirmPassword: yup.string()
                .oneOf([yup.ref('password'), null], 'پسوردها یکسان نیستند')
        }),
    });

    await registerSchema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      }, { abortEarly: false })
      .then(() => {
        return next();
      })
      .catch((err) => {
        return tools.respMsg(res, 422, err.errors);
    });

    const usernameCheck = await User.findOne({ username });
    if(usernameCheck) return tools.respMsg(res, 422, req.t("username"));

    const emailCheck = await User.findOne({ email });
    if(emailCheck) return tools.respMsg(res, 422, req.t("password"));

    next();
};

module.exports = {
    loginValidation,
    registerValidation
}


                // .required(tools.translate(lang, "required"))

    // const lang = req.headers['accept-language'];
    // tools.translate(lang, "min", { name: "username" })

    // await loginSchema.validate(req.body, { abortEarly: false })
    // .then(() => {
    //     return next();
    // })
    // .catch((err) => {
    //     return tools.respMsg(res, 422, err.errors);
    // })

    // validateRequest(loginSchema);
    // await loginSchema.validate(req.body, { abortEarly: false })
    // .then(() => {
    //     return next();
    // })
    // .catch((err) => {
    //     return tools.respMsg(res, 422, err.errors);
    // })

    // try {
    //     await loginSchema.validate(req.body, { abortEarly: false });
    //     return next();
    // } catch (err) {
    //     console.log(req.t(err.errors));
    //     tools.respMsg(res, 422, req.t(err.errors));
    // }

    // const count = { 
    //     name: 'Jan'
    // };
    // const count = { 
    //     name: 'Jan'
    // };
// const loginValidation = yup.object({
//     body: yup.object({
//         username: yup.string()
//             .min(3, "username")
//             .max(32)
//             .required("required", { name: 'username' }),
//         password: yup.string()
//             .min(1, "رمز عبور نباید کمتر از ۱۲ رقم باشد")
//             .max(32)
//             .required("پسورد الزامی است"),
//     })
// }); 
    // const validateRequest = (loginSchema) => async (req, res, next) => {    // };


// const i18next = require('i18next');
// const translate = require("@utils/tools.js");

    // loginSchema.validate(req.body, { abortEarly: false })
    // .then(() => {
    //     next();
    // })
    // .catch((err) => {
    //     return res.status(422).json({
    //         state: null,
    //         message: err.errors,
    //         data: null,
    //         errors: null
    //     })
    // })
// }

 
    // registerSchema.validate(req.body, { abortEarly: false })
    //     .then(() => {
    //         next();
    //     })
    //     .catch((err) => {
    //         return res.status(422).json({
    //             state: null,
    //             message: err.errors,
    //             data: null,
    //             errors: null
    //         })
    //     })
// }

        // let errorArr = [];
        // console.log(error.errors);
        // console.log({ 
        //     // type: error.name, 
        //     message: error.errors 
        // })

    // const login = await loginSchema.validate()
    // console.log(login);
    // validate(req.body)
        // .then((result) => {
        //     next();
        //     // const validate = v.validate(req.body, AuthRequest);
        //     // let errorArr = [];
        // })
        // .catch((error) => { 
        //     console.log(error);
        //     // let errorArr = [];
        //     // error.forEach((err) => {
        //     //     errorArr.push(err.message);
        //     // });

        //     // console.log(errorArr);
        //     // return res.status(422).json({
        //     //     state: false,
        //     //     message: "failed!",
        //     //     data: null,
        //     //     errors: errorArr
        //     // });
        //  });
    // const login = await loginSchema.validate(await fetchUser());
