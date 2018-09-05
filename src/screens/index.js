const Login = require('./login');
const Home = require('./home');

// This is our main route config,
// to have a single place to collect
// our screens and configure their
// relationships via other navigators

module.exports = (store) => {

    return {
        routeConfig: {
            Home,
            Login
        },
        initialRouteName: 'Home'
    };
};
