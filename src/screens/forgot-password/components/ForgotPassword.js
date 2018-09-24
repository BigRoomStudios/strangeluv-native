const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');
const IsEmail = require('utils/is-email');

const GStyles = require('styles'); // global styles

const { Title, StylishText, ErrorText, StyledScrollView, TitleContainer } = GStyles;

const InputField = require('components/InputField');
const DefaultButton = require('components/DefaultButton');

module.exports = class ForgotPassword extends StrangeForms(React.Component) {

    static propTypes = {
        requestReset: T.func.isRequired,
        errorMessage: T.string
    };

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            hasEmailBlurred: false
        };

        this.showEmailError = this._showEmailError.bind(this);
        this.emailFieldBlurred = this._emailFieldBlurred.bind(this);
        this.disableButton = this._disableButton.bind(this);
        this.getFormValue = this._getFormValue.bind(this);
        this.submit = this._submit.bind(this);

        this.strangeForm({
            fields: ['email'],
            get: (someProps, field) => this.state[field],
            act: (field, value) => this.setState({ [field]: value }),
            getFormValue: this.getFormValue
        });

    }

    _getFormValue(value) {

        return value;
    }

    _emailFieldBlurred() {

        this.setState({ hasEmailBlurred: true });
    }

    _showEmailError() {

        return this.state.hasEmailBlurred && !IsEmail(this.state.email);
    }

    _disableButton() {

        const { email } = this.state;

        return !IsEmail(email);
    }

    _submit() {

        const { email } = this.state;

        // TODO Need to reset the form, so form is empty on navigating back
        this.props.requestReset({ email });
    }

    render() {

        // TODO when typing triggers an invalid email, you lose your cursor, are booted from
        // the input. Why? How can we prevent?
        return (
            <StyledScrollView>
                <TitleContainer>
                    <Title>Forgot Your Password?</Title>
                    <StylishText>To reset your password, enter your email below and we will email a link to reset your password.</StylishText>
                </TitleContainer>
                <InputField
                    hasError={this.showEmailError()}
                    onChangeText={this.proposeNew('email')}
                    onBlur={this.emailFieldBlurred}
                    value={this.fieldValue('email')}
                    placeholder='Email Address'
                    iconName='envelope'
                    keyboardType='email-address'
                    autoCorrect={false}
                    iconSize={18}
                />
                {this.showEmailError() &&
                    <ErrorText>Please enter a valid email address</ErrorText>
                }
                {this.props.errorMessage &&
                    <ErrorText>{this.props.errorMessage}</ErrorText>
                }
                <DefaultButton
                    onPress={this.submit}
                    text='GET A PASSWORD RESET CODE'
                    icon='inbox'
                    disabled={this.disableButton()}
                />
            </StyledScrollView>
        );
    }
};
