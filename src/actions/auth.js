const StrangeAuth = require('strange-auth');
const WebClient = require('utils/web-client');
const AuthAct = require('action-types/auth');
const NavigationService = require('navigators/navigation-service');

const internals = {};

const actions = exports;

// New User Registration
exports.registrationRequest = (payload) => ({
    type: AuthAct.REGISTRATION_BEGIN,
    payload
});

exports.registrationSuccess = (data) => ({
    type: AuthAct.REGISTRATION_SUCCESS,
    payload: data
});

exports.registrationFailure = (errMessage) => ({
    type: AuthAct.REGISTRATION_FAILURE,
    payload: errMessage
});

exports.loginFailure = (errMessage) => ({
    type: AuthAct.LOGIN_FAIL,
    payload: errMessage
});

exports.clearErrors = () => ({
    type: AuthAct.CLEAR_AUTH_ERRORS
});

exports.registerUser = ({ email, password, firstName, lastName }) => {

    return (dispatch) => {

        dispatch(actions.registrationRequest({ email, password, firstName, lastName }));

        return WebClient.post('/users', { email, password, firstName, lastName })
        .then(({ response }) => {

            dispatch(actions.registrationSuccess(response));
            dispatch(actions.login({ email, password }));
        })
        .catch((err) => {

            let errMessage = 'Signup failed. Please try again.';

            if (typeof err.response !== 'undefined') {
                errMessage = err.response.data.message;
            }

            dispatch(actions.registrationFailure(errMessage));
        });
    };
};

// Login and Logout
exports.login = ({ email, password, token }) => {

    return (dispatch) => {

        return dispatch(internals.strangeActions.login({ email, password, token }))
        .then((result) => {

            NavigationService.navigate('Dashboard');
        })
        .catch((err) => {

            dispatch(actions.loginFailure(err.response.data.message));
        });
    };
};

exports.logout = () => {

    return (dispatch) => {

        dispatch(internals.strangeActions.logout());
        NavigationService.navigate('Home');
    };
};

// StrangeAuth
internals.strangeActions = StrangeAuth.makeActions({
    login: ({ email, password, token }) => {

        const getToken = () => {

            if (token) {
                return Promise.resolve(token);
            }

            return WebClient.post('/login', { email, password }, { responseType: 'text' })
            .then(({ data }) => data);
        };

        let finalToken;

        return getToken()
        .then((result) => {

            finalToken = result;
            return internals.getUser(finalToken);
        })
        .then(({ data }) => {

            return {
                credentials: {
                    token: finalToken,
                    user: data
                }
            };
        });
    }
});

internals.getUser = (token) => {

    return WebClient.get('/user', {
        headers: { authorization: `Bearer ${token}` }
    });
};
