const Connect = require('react-redux').connect;
const AuthAct = require('actions/auth');
const Login = require('../components/Login');

const internals = {};

// What state and actions do we want to hook-up?
internals.connect = Connect(
    (state) => ({
        formData: state.formData
    }),
    {
        login: (args) => AuthAct.login
    }
);

// Hook them up to the login
module.exports = internals.connect(Login);
