const AuthTypes = require('action-types/auth');

const internals = {
    initial: {
        init: false,
        error: false,
        text: '',
        isLoggedIn: false
    }
};

module.exports = (state, action) => {

    state = state || internals.initial;

    switch (action.type) {
        case AuthTypes.LOGIN_INITIATED:
            return { ...state, init: true, error: false };
        case AuthTypes.LOGIN_ERROR:
            return { ...state, init: false, error: true, text: action.text };
        case AuthTypes.LOGGED_IN:
            return { ...state, isLoggedIn: true, init: false, error: false };
        case AuthTypes.LOGGED_OUT:
            return { ...state, isLoggedIn: false };
        case AuthTypes.LOGIN_CLEAR_ERRORS:
            return {  ...state, init: false, error: false, text: '' };
        case AuthTypes.LOGIN_RESET:
            return internals.initialState;
        default:
            return state;
    }
};
