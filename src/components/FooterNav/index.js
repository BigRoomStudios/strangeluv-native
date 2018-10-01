const React = require('react');
const T = require('prop-types');
const DefaultButton = require('components/DefaultButton');
const { Footer } = require('./styles');

module.exports = class FooterNav extends React.PureComponent {

    static propTypes = {
        isAuthenticated: T.bool.isRequired,
        navigation: T.object.isRequired,
        logout: T.func
    };

    render() {

        const { navigation, isAuthenticated, logout } = this.props;

        return (

            <Footer>
                <DefaultButton
                    transparent
                    color='#b71c1c'
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
                    icon='dashboard'
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
