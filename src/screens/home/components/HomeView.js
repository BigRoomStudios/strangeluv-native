const React = require('react');
const T = require('prop-types');

// Styles
const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { ScrollView, Title } = GStyles;
const { Duck, InheritStylesText } = LStyles;

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired,
        isAuthenticated: T.bool.isRequired,
        logout: T.func.isRequired
    };

    render() {

        const { navigation, isAuthenticated, logout } = this.props;

        return (
            <ScrollView>
                <InheritStylesText color='#b71c1c' onPress={() => navigation.navigate('Home')}>
                    Home
                </InheritStylesText>
                {!isAuthenticated &&
                    <InheritStylesText onPress={() => navigation.navigate('Login')}>Login</InheritStylesText>
                }
                {!isAuthenticated &&
                    <InheritStylesText onPress={() => navigation.navigate('Signup')}>Signup</InheritStylesText>
                }
                {isAuthenticated && <InheritStylesText onPress={() => navigation.navigate('Dashboard')}>
                    Dashboard
                </InheritStylesText>}
                {isAuthenticated && <InheritStylesText onPress={logout}>
                    Logout
                </InheritStylesText>}
                <Title>Welcome!</Title>
                <Duck source={require('../assets/duck.png')} />
            </ScrollView>
        );
    }
};
