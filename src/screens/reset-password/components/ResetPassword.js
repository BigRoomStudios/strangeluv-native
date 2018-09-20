const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');
const IsEmail = require('utils/is-email');

const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { Title } = GStyles;
const { StylishText, ErrorText, StyledScrollView, TitleContainer } = LStyles;

const InputField = require('components/InputField');
const DefaultButton = require('components/DefaultButton');

module.exports = class ResetPassword extends StrangeForms(React.Component) {

    static propTypes = {
        resetPassword: T.func.isRequired,
        errorMessage: T.string
    };

    constructor(props) {

        super(props);

        this.state = {
            token: '',
            email: '',
            password: '',
            confirmPassword: '',
            isBlurred: {
                // TODO Do we want to care about token errors?
                email: false,
                confirmPassword: false
            }
        };

        this.showEmailError = this._showEmailError.bind(this);
        this.fieldBlurred = this._fieldBlurred.bind(this);
        this.showEmailError = this._showEmailError.bind(this);
        this.showPasswordError = this._showEmailError.bind(this);
        this.passwordsMatch = this._passwordsMatch.bind(this);
        this.disableButton = this._disableButton.bind(this);
        this.getFormValue = this._getFormValue.bind(this);
        this.submit = this._submit.bind(this);

        this.strangeForm({
            fields: ['token', 'email', 'password', 'confirmPassword'],
            get: (someProps, field) => this.state[field],
            act: (field, value) => this.setState({ [field]: value }),
            getFormValue: this.getFormValue
        });

    }

    _getFormValue(value) {

        return value;
    }

    _fieldBlurred(ev) {

        const isBlurred = { ...this.state.isBlurred };
        const field = ev.nativeEvent.target.id;
        console.log(ev, 'WHAT THE FUCK DOES THIS LOOK LIKE', field);
        isBlurred[field] = true;

        this.setState({ isBlurred });
    }

    _showEmailError() {

        return this.state.isBlurred.email && !IsEmail(this.state.email);
    }

    _showPasswordError() {

        return this.state.isBlurred.confirmPassword && !this.passwordsMatch();
    }

    _passwordsMatch() {

        return this.state.password === this.state.confirmPassword;
    }

    _disableButton() {

        const { token, email, password } = this.state;
        // TODO Is this at all right?
        const fieldHasValue = (token && email && password) !== '';

        if (fieldHasValue && IsEmail(email) && this.passwordsMatch()) {
            return false;
        }

        return true;
    }

    _submit() {

        const { token, email, password } = this.state;

        // TODO Need to reset the form, so form is empty on navigating back
        this.props.resetPassword(token, email, password);
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
                    text='GET A PASSWORD RESET LINK'
                    icon='inbox'
                    disabled={this.disableButton()}
                />
            </StyledScrollView>
        );
    }
};
