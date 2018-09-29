const React = require('react');
const T = require('prop-types');
const { Container, Content, Text } = require('native-base');
const { Button } = require('styles');
const { Duck } = require('./styles');

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired,
        isAuthenticated: T.bool.isRequired,
        logout: T.func.isRequired
    };

    render() {

        const { navigation, isAuthenticated, logout } = this.props;

        return (
            <Container>
                <Content padder>
                    <Button color='#b71c1c' onPress={() => navigation.navigate('Home')} text='Home' />
                    {!isAuthenticated && <Button onPress={() => navigation.navigate('Login')} text='Login' />}
                    {!isAuthenticated && <Button onPress={() => navigation.navigate('Signup')} text='Sign up' />}
                    {isAuthenticated && <Button onPress={() => navigation.navigate('Dashboard')} text='Dashboard' />}
                    {isAuthenticated && <Button onPress={logout} text='Logout' />}
                    <Text>Welcome!</Text>
                    <Duck source={require('../assets/duck.png')} />
                </Content>
            </Container>
        );
    }
};
