const User = require("@app/models/userModel");
const bcrypt = require("bcrypt");
const tools = require("@utils/tools.js");

const loginModelValidation = async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    // const count = { 
    //     name: 'Jan'
    // };
    if(!user) 
        return tools.respMsg(res, 422, req.t("min", { name: 'username', min: '21'}));

    const isCompare = await bcrypt.compare(password, user.password);
    if(!isCompare) 
        return tools.respMsg(res, 422, req.t("password"));

    next();
}

const registerModelValidation = async (req, res, next) => {
    const { username, email } = req.body;

    const usernameCheck = await User.findOne({ username });
    if(usernameCheck)
        tools.respMsg(res, 422, req.t("username"));

    const emailCheck = await User.findOne({ email });
    if(emailCheck)
        tools.respMsg(res, 422, req.t("password"));

    next();
}

module.exports = {
    registerModelValidation,
    loginModelValidation
}