const React = require('react');
const T = require('prop-types');
const Theme = require('styles/theme');
const Icon = require('react-native-vector-icons/FontAwesome').default;
const { Button, ButtonText } = require('./styles');

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
                <ButtonText>
                    {this.props.text}
                </ButtonText>
            </Button>
        );
    }
};
