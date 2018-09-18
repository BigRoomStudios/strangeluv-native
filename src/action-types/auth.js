const KeyMirror = require('keymirror');

module.exports = KeyMirror({
    REGISTRATION_BEGIN: true,
    REGISTRATION_SUCCESS: true,
    REGISTRATION_FAILURE: true,
    LOGIN: true,
    LOGOUT: true,
    LOGIN_FAIL: true,
    CLEAR_AUTH_ERRORS: true
});
