const React = require('react');
const T = require('prop-types');

// Styles
const GStyles = require('styles'); // global styles

const { ScrollView, Title, Text } = GStyles;

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired,
        logout: T.func.isRequired
    };

    render() {

        const { navigation, logout } = this.props;

        return (
            <ScrollView>
                <Text color='#b71c1c' onPress={() => navigation.navigate('Home')}>
                    Home
                </Text>
                <Text onPress={logout}>
                    Logout
                </Text>
                <Title>Very cool dashboard!</Title>
            </ScrollView>
        );
    }
};
