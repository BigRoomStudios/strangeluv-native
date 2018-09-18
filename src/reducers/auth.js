const StrangeAuth = require('strange-auth');
const Deeply = require('utils/deeply');
const AuthTypes = require('action-types/auth');

const authReducer = StrangeAuth.makeReducer();

module.exports = (state, action) => {

    state = authReducer(state, action);

    const { type, payload } = action;

    switch (type) {

        // Example of modifying a strange-auth action-type
        case StrangeAuth.types.LOGIN_FAIL:

            return Deeply(state)
            .set('error.message', 'Login failed, please check your email and password.')
            .value();

        case AuthTypes.REGISTRATION_FAILURE:

            return Deeply(state)
            .set('error.message', payload)
            .value();

        case AuthTypes.CLEAR_AUTH_ERRORS:

            return Deeply(state)
            .set('error.message', null)
            .value();
    }

    return state;
};
