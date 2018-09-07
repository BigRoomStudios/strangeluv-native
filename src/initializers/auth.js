const { AsyncStorage } = require('react-native');
// const LocalStorageAvailable = require('utils/check-local-storage');
const AuthActions = require('actions/auth');
const AuthSelectors = require('selectors/auth');

module.exports = (store) => {

    // if (!LocalStorageAvailable()) {
    //
    //     // This forces strange-auth auth status to be set
    //     // If no local storage, then we can determine there's no token
    //     store.dispatch(AuthActions.login({ token: false }));
    //
    //     return;
    // }

    // const auth = await AsyncStorage.getItem('auth_token');

    // const persistSet = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    // const persistSet = async (key, value) => await AsyncStorage.setItem(key, JSON.stringify(value));
    // const persistGet = async (key) => JSON.parse(await AsyncStorage.getItem(key) || 'null');
    // const persistRemove = async (key) => await AsyncStorage.removeItem(key);

    const getIsAuthenticated = () => AuthSelectors.getIsAuthenticated(store.getState());
    const getToken = () => AuthSelectors.getToken(store.getState());

    // const token = persistGet('token');

    AsyncStorage.getItem('token', (err, token) => {

        if (err) {
            console.warn('set token error ' + JSON.stringify(err));
        }

        console.warn('got token ' + token);
        store.dispatch(AuthActions.login({ token }));
    });

    store.subscribe(() => {

        if (getIsAuthenticated()) {

            const token = getToken();

            AsyncStorage.setItem('token', token, (err) => {

                if (err) {
                    console.warn('set token error ' + JSON.stringify(err));
                }

                // console.warn('success in setting?');

                AsyncStorage.getItem('token', (err, value) => {

                    if (err) {
                        console.warn('set token error ' + JSON.stringify(err));
                    }

                    console.warn('got token ' + value);
                });
            });


            // console.warn('persisting ' + test);
            // console.warn('stringify test ' + JSON.stringify(test));
            // persistSet('token', test);
            // const testToken = persistGet('token');
            // console.warn('test async ' + JSON.stringify(AsyncStorage.getItem('token')));
            // console.warn('test persist ' + JSON.stringify(testToken));
        }
        else {
            // persistRemove('token');

            AsyncStorage.removeItem('token', (err) => {

                if (err) {
                    console.warn('set token error ' + JSON.stringify(err));
                }

                // console.warn('success in setting?');

                // AsyncStorage.getItem('token', (err, value) => {
                //
                //     if (err) {
                //         console.warn('set token error ' + JSON.stringify(err));
                //     }
                //
                //     console.warn('got token ' + JSON.stringify(value));
                // });
            });
        }
    });
};
