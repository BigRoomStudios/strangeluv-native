const React = require('react');
const T = require('prop-types');
const Theme = require('styles/theme');
const { Input } = require('native-base');

module.exports = class InputField extends React.PureComponent {

    static propTypes = {
        placeholder: T.string.isRequired,
        value: T.string.isRequired,
        hasError: T.bool,
        onChangeText: T.func,
        keyboardType: T.string,
        secureTextEntry: T.bool
    }

    render() {

        return (

            <Input
                placeholderTextColor={Theme.primaryColor}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                selectionColor='#fff'
                autoCorrect={false}
                secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
                {...this.props}
            />
        );
    }
};
