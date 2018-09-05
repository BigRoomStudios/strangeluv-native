const React = require('react');
const T = require('prop-types');

const LStyles = require('./styles');
const Theme = require('styles/theme');

const Icon = require('react-native-vector-icons/FontAwesome').default;

const { InputContainer, InputIconContainer, StyledInput } = LStyles;

module.exports = class InputField extends React.PureComponent {

    static propTypes = {
        placeholder: T.string.isRequired,
        value: T.string.isRequired,
        iconName: T.string.isRequired,
        hasError: T.bool.isRequired,
        iconSize: T.number,
        onChangeText: T.func,
        keyboardType: T.string,
        secureTextEntry: T.bool
    }

    render() {

        const { iconSize } = this.props;

        return (

            <InputContainer>
                <InputIconContainer>
                    <Icon name={this.props.iconName} size={iconSize ? iconSize : 22} color={Theme.secondaryColor} />
                </InputIconContainer>
                <StyledInput
                    placeholderTextColor={Theme.primaryColor}
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    selectionColor='#fff'
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
                    {...this.props}
                />
            </InputContainer>
        );
    }
};
