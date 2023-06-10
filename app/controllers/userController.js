const User = require("@app/models/userModel");
const bcrypt = require("bcrypt");
const tools = require("@utils/tools.js");

const login = async (req, res) => {
    const user = req.body;
    if(user) return tools.respMsg(res, 200, req.t("loggedIn"), user);
}

const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });
    if(user) return tools.respMsg(res, 422, req.t("register"), user);
}

const getAllUsers = async (req, res, next) => {}

const setAvatar = async (req, res, next) => {}

const logOut = async (req, res, next) => {}

module.exports = {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut
}

        // return res.status(200).json({
        //     state: null,
        //     message: req.t("register"),
        //     // message: "you are registred",
        //     data: null,
        //     errors: null
        // });

    // req.i18n.changeLanguage('fa');
    // console.log(req.i18n);

// const usernameCheck = await User.findOne({ username });
// if(usernameCheck)
//     return res.status(422).json({
//         state: null,
//         message: "username is exist",
//         data: null,
//     });
// const emailCheck = await User.findOne({ email });
// if(emailCheck)
//     return res.status(422).json({
//         state: null,
//         message: "email is exist",
//         data: null,
//     });

    // User.findOne({ username }, (err, result) => {
    //     console.log(err);
    // })
        // .then((result) => {
        //     console.log(result);
        //     // bcrypt.compare(password, result.password)
        //     //     .then((result) => {
        //     //         // console.log(result);
        //     //     })
        //     // console.log(result);
        //     // if (result) {
        //         //console.log(result.password);

        //     //}
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    // try {
        // const a = await User.findOne({ username });
        // console.log(a);

        // const user = await User.findOne({ username });
        // if(!user) 
        //     return res.status(422).json({
        //         state: null,
        //         message: "username or password is not exist",
        //         data: user,
        //         errors: null
        //     });
        // const isConfirmed = await bcrypt.compare(password, user.password);
        // if(!user) 
        //     return res.status(422).json({
        //         state: null,
        //         message: "username or password is not exist",
        //         data: user,
        //         errors: null
        //     });
    // } catch (ex) {
    //     return ex
    // }

            // try{
        // console.log(usernameCheck)
        // if(usernameCheck)
        //     return res.status.json({
        //         state: null,
        //         message: "username is exists",
        //         data: null,
        //         errors: null
        //     });

        // const emailCheck = await user.findOne({ email });
        // if(emailCheck)
        //     return res.status.json({
        //         state: null,
        //         message: "email is exists",
        //         data: null,
        //         errors: null
        //     });
    // } catch (ex) {
    //     return ex;
    // }
