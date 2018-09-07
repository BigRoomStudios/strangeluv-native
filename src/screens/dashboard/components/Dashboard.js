const React = require('react');
const T = require('prop-types');

// Styles
const GStyles = require('styles'); // global styles

const { ScrollView, Title, Text } = GStyles;

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired
    };

    constructor() {

        super();

        this.navigate = this._navigate.bind(this);
    }

    _navigate(navigation, path) {

        return (...a) => {

            navigation.navigate(path);
        };
    }

    render() {

        const { navigation } = this.props;

        return (
            <ScrollView>
                <Text color='#b71c1c' onPress={this.navigate(navigation, 'Home')}>
                    Home
                </Text>
                <Title>Very cool dashboard!</Title>
            </ScrollView>
        );
    }
};
