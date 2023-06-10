const { routes: authRoutes } = require('@utils/general');
const { login, register } = require('@app/controllers/userController');
const { loginValidation, registerValidation } = require('@app/requestValidations/authValidation');
const validateRequest = require('@middlewares/validateRequest');
const { loginModelValidation } = require('@app/requestValidations/authValidation/modelValidation');

authRoutes.post("/login", loginValidation, loginModelValidation, login);
authRoutes.post("/register", registerValidation, register);

module.exports = authRoutes;
