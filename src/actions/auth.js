const AuthTypes = require('action-types/auth');
const { api } = require('../middleware/api');
const { AsyncStorage } = require('react-native');


exports.authenticateUser = (args) => {

    return (dispatch) => {

        dispatch({ type: AuthTypes.LOGIN_INITIATED });

        api('login', 'post', args).then((response) => {

            if (response.status !== 200) {
                return dispatch({ type: AuthTypes.LOGIN_ERROR, err: response });
            }

            AsyncStorage.setItem('auth_token', response._bodyText).then(() => {

                dispatch({ type: AuthTypes.LOGGED_IN });
            });

        }).catch((err) => dispatch({ type: AuthTypes.LOGIN_ERROR, err }));
    };
};
