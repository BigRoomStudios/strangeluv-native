const React = require('react');
const T = require('prop-types');

const LStyles = require('./styles');
const Theme = require('styles/theme');

const Icon = require('react-native-vector-icons/FontAwesome').default;

const { Button, ButtonText } = LStyles;

module.exports = class DefaultButton extends React.PureComponent {

    static propTypes = {
        icon: T.string,
        text: T.string.isRequired,
        onPress: T.func.isRequired,
        disabled: T.boolean
    };

    render() {

        return (

            <Button onPress={this.props.onPress} disabled={this.props.disabled}>
                {this.props.icon &&
                    <Icon name={this.props.icon} size={24} color={Theme.secondaryColor} />
                }
                <ButtonText>
                    {this.props.text}
                </ButtonText>
            </Button>
        );
    }
};
