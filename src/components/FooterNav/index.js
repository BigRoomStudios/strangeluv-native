const React = require('react');
const T = require('prop-types');
const DefaultButton = require('components/DefaultButton');
const { Footer } = require('native-base');

module.exports = class FooterNav extends React.PureComponent {

    static propTypes = {
        isAuthenticated: T.bool.isRequired,
        navigation: T.object.isRequired,
        logout: T.func
    };

    render() {

        const { navigation, isAuthenticated, logout } = this.props;

        return (

            <Footer {...this.props}>
                <DefaultButton
                    transparent
                    onPress={() => navigation.navigate('Home')}
                    icon='home'
                    text='Home'
                    iconLeft
                />
                {!isAuthenticated &&
                <DefaultButton
                    transparent
                    onPress={() => navigation.navigate('Login')}
                    icon='log-in'
                    text='Log-in'
                    iconLeft
                />
                }
                {!isAuthenticated &&
                <DefaultButton
                    transparent
                    onPress={() => navigation.navigate('Signup')}
                    icon='person-add'
                    text='Sign-up'
                    iconLeft
                />
                }
                {isAuthenticated &&
                <DefaultButton
                    transparent
                    onPress={() => navigation.navigate('Dashboard')}
                    icon='apps'
                    text='Dashboard'
                    iconLeft
                />
                }
                {isAuthenticated &&
                <DefaultButton
                    transparent
                    onPress={logout}
                    icon='log-out'
                    text='Logout'
                    iconLeft
                />
                }
            </Footer>
        );
    }
};
