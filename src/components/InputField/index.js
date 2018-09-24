const React = require('react');
const T = require('prop-types');
const Theme = require('styles/theme');
const Icon = require('react-native-vector-icons/FontAwesome').default;
const { InputContainer, InputIconContainer, StyledInput, ErrorInput } = require('./styles');

module.exports = class InputField extends React.PureComponent {

    static propTypes = {
        placeholder: T.string.isRequired,
        value: T.string.isRequired,
        iconName: T.string.isRequired,
        hasError: T.bool,
        iconSize: T.number,
        onChangeText: T.func,
        keyboardType: T.string,
        secureTextEntry: T.bool
    }

    render() {

        const { iconSize, iconName, hasError } = this.props;

        const InputComponent = hasError ? ErrorInput : StyledInput;

        return (

            <InputContainer>
                <InputIconContainer>
                    <Icon name={iconName} size={iconSize ? iconSize : 22} color={hasError ? 'red' : Theme.secondaryColor} />
                </InputIconContainer>
                <InputComponent
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
