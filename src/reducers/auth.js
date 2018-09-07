const StrangeAuth = require('strange-auth');
const Deeply = require('utils/deeply');

const authReducer = StrangeAuth.makeReducer();

module.exports = (state, action) => {

    state = authReducer(state, action);

    const { type } = action;

    switch (type) {

        // Example of modifying a strange-auth action-type
        case StrangeAuth.types.LOGIN_FAIL:

            return Deeply(state)
            .set('error.message', 'Login failed, please check your email and password.')
            .value();
    }

    return state;
};
