const React = require('react');
const T = require('prop-types');
const { Button, Icon, Text } = require('native-base');
const Theme = require('styles/theme');

module.exports = class DefaultButton extends React.PureComponent {

    static propTypes = {
        icon: T.string,
        text: T.string.isRequired,
        onPress: T.func.isRequired
    };

    render() {

        return (

            <Button onPress={this.props.onPress}>
                {this.props.icon &&
                    <Icon name={this.props.icon} size={24} color={Theme.secondaryColor} />
                }
                <Text>
                    {this.props.text}
                </Text>
            </Button>
        );
    }
};
