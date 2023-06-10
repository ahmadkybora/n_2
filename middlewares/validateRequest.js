const tools = require("@utils/tools.js");

const validateRequest = (schema) => async (req, res, next) => {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    }, { abortEarly: false })
    .then(() => {
        return next();
    })
    .catch((err) => {
        return tools.respMsg(res, 422, err.errors);
    })
};
module.exports = validateRequest;

// await schema.validate(, { abortEarly: false })

// const validateRequest = (schema) => async (req, res, next) => {
//   try {
//     await schema.validate({
//       body: req.body,
//       query: req.query,
//       params: req.params,
//     }, { abortEarly: false });
//     return next();
//   } catch (err) {
//     console.log(req.t(err.errors));
//     return tools.respMsg(res, 422, req.t(err.errors));
//   }
// };