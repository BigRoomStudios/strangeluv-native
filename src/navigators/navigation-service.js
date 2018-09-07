// Adapted from https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
const { NavigationActions } = require('react-navigation');

const internals = {
    navigator: null
};

exports.navigate = (routeName, key = null, params = {}) => {

    return internals.navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            key,
            params
        })
    );
};

exports.setTopLevelNavigator = (navigatorRef) => {

    internals.navigator = navigatorRef;
};
