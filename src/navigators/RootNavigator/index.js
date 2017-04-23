const React = require('react');
const Reducers = require('../../wiring/reducers');
const Connect = require('react-redux').connect;
const { DrawerNavigator, addNavigationHelpers } = require('react-navigation');
const DrawerComponent = require('./DrawerComponent');
const MainStack = require('../MainStack');

const internals = {};

internals.connect = Connect(
    (state) => ({
        nav: state.nav
    })
);

module.exports = (store) => {

    const Scenes = require('../../scenes')(store);

    if (!Scenes.routeConfig || !Scenes.initialRouteName) {
        throw new Error('Scenes must export props "routeConfig" and "initialRouteName"');
    }

    // https://reactnavigation.org/docs/navigators
    // https://reactnavigation.org/docs/navigators/stack#RouteConfigs

    // Scenes returns { routeConfig, initialRouteName }

    const AppNavigator = DrawerNavigator(

        {
            Main: { screen: MainStack(store, Scenes) }
        },
        {
            // nav config
            drawerPosition: 'right',
            contentComponent: DrawerComponent
        }
    );

    class AppNavigatorClass extends React.Component {

        render() {

            const { dispatch, nav } = this.props;

            return (
                <AppNavigator
                    navigation={
                        addNavigationHelpers({
                            dispatch,
                            state: nav
                        })
                    }
                />
            );
        };
    };

    AppNavigatorClass.propTypes = {
        dispatch: React.PropTypes.any.isRequired,
        nav: React.PropTypes.any.isRequired
    };

    const appNavReducer = require('../../reducers/nav')(AppNavigator);

    Reducers.inject(store, { key: 'nav', reducer: appNavReducer });

    return internals.connect(AppNavigatorClass);
};
