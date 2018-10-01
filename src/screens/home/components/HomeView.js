const React = require('react');
const T = require('prop-types');
const { CardItem } = require('native-base');
const { Button, ScrollView } = require('styles');
const { Card, Container, Duck, Footer, Text } = require('./styles');

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
                <ScrollView>
                    <Card bordered>
                        <CardItem header bordered>
                            <Text>Yo! I'm Strangeluv Native</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Duck source={require('../assets/duck.png')} />
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>with Nativebase</Text>
                        </CardItem>
                    </Card>
                    <Card bordered>
                        <CardItem header bordered>
                            <Text>It's an Auth Recipe</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Duck source={require('../assets/icon.png')} />
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>A pretty sweet start to a user centric app</Text>
                        </CardItem>
                    </Card>
                </ScrollView>
                <Footer>
                    <Button
                        transparent
                        color='#b71c1c'
                        onPress={() => navigation.navigate('Home')}
                        icon='home'
                        text='Home'
                        iconLeft
                    />
                    {!isAuthenticated &&
                        <Button
                            transparent
                            onPress={() => navigation.navigate('Login')}
                            icon='log-in'
                            text='Log-in'
                            iconLeft
                        />
                    }
                    {!isAuthenticated &&
                        <Button
                            transparent
                            onPress={() => navigation.navigate('Signup')}
                            icon='person-add'
                            text='Sign-up'
                            iconLeft
                        />
                    }
                    {isAuthenticated &&
                        <Button
                            transparent
                            onPress={() => navigation.navigate('Dashboard')}
                            icon='dashboard'
                            text='Dashboard'
                            iconLeft
                        />
                    }
                    {isAuthenticated &&
                        <Button
                            transparent
                            onPress={logout}
                            icon='log-out'
                            text='Logout'
                            iconLeft
                        />
                    }
                </Footer>
            </Container>
        );
    }
};
