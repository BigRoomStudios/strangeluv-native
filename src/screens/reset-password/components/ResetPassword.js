const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');
const IsEmail = require('utils/is-email');

const GStyles = require('styles'); // global styles

const { Title, StylishText, ErrorText, StyledScrollView, TitleContainer } = GStyles;

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
            email: '',
            resetToken: '',
            password: '',
            confirmPassword: '',
            isBlurred: {
                email: false,
                confirmPassword: false
            }
        };

        this.showEmailError = this._showEmailError.bind(this);
        this.toggleFieldBlur = this._toggleFieldBlur.bind(this);
        this.showEmailError = this._showEmailError.bind(this);
        this.showPasswordError = this._showPasswordError.bind(this);
        this.passwordsMatch = this._passwordsMatch.bind(this);
        this.disableButton = this._disableButton.bind(this);
        this.getFormValue = this._getFormValue.bind(this);
        this.submit = this._submit.bind(this);

        this.strangeForm({
            fields: ['email', 'resetToken', 'password', 'confirmPassword'],
            get: (someProps, field) => this.state[field],
            act: (field, value) => this.setState({ [field]: value }),
            getFormValue: this.getFormValue
        });

    }

    _getFormValue(value) {

        return value;
    }

    _toggleFieldBlur(field, bool) {

        const isBlurred = { ...this.state.isBlurred };
        isBlurred[field] = bool;
        this.setState(Object.assign({}, this.state, { isBlurred }));
    }

    _showEmailError() {

        return this.state.isBlurred.email && (!!this.state.email && !IsEmail(this.state.email));
    }

    _showPasswordError() {

        return this.state.isBlurred.confirmPassword && !this.passwordsMatch();
    }

    _passwordsMatch() {

        return this.state.password === this.state.confirmPassword;
    }

    _disableButton() {

        const { email, resetToken } = this.state;

        if (IsEmail(email) && resetToken !== '' && this.passwordsMatch()) {
            return false;
        }

        return true;
    }

    _submit() {

        const { email, resetToken, password } = this.state;

        // TODO Need to reset the form, so form is empty on navigating back?
        this.props.resetPassword(email, password, resetToken);
    }

    render() {

        // TODO when typing triggers an invalid email, you lose your cursor, are booted from
        // the input. Why? How can we prevent?
        return (
            <StyledScrollView>
                <TitleContainer>
                    <Title>Reset Password</Title>
                    <StylishText>Please confirm your email address, enter the reset code you received via email, and set your new password below.</StylishText>
                </TitleContainer>
                <InputField
                    hasError={this.showEmailError()}
                    onChangeText={this.proposeNew('email')}
                    onBlur={() => this.toggleFieldBlur('email', true)}
                    onFocus={() => this.toggleFieldBlur('email', false)}
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
                <InputField
                    onChangeText={this.proposeNew('resetToken')}
                    value={this.fieldValue('resetToken')}
                    placeholder='Password Reset Code'
                    iconName='envelope'
                    keyboardType='number-pad'
                    autoCorrect={false}
                    iconSize={18}
                />
                <InputField
                    onChangeText={this.proposeNew('password')}
                    value={this.fieldValue('password')}
                    placeholder='Password'
                    iconName='unlock-alt'
                    secureTextEntry
                />
                <InputField
                    hasError={this.showPasswordError()}
                    onBlur={() => this.toggleFieldBlur('confirmPassword', true)}
                    onFocus={() => this.toggleFieldBlur('confirmPassword', false)}
                    onChangeText={this.proposeNew('confirmPassword')}
                    value={this.fieldValue('confirmPassword')}
                    placeholder='Confirm Password'
                    // TODO Pick new icon
                    iconName='unlock-alt'
                    secureTextEntry
                />
                {this.showPasswordError() &&
                    <ErrorText>Please enter matching passwords</ErrorText>
                }
                {this.props.errorMessage &&
                    <ErrorText>{this.props.errorMessage}</ErrorText>
                }
                <DefaultButton
                    onPress={this.submit}
                    text='UPDATE PASSWORD'
                    // TODO Pick new icon
                    icon='inbox'
                    disabled={this.disableButton()}
                />
            </StyledScrollView>
        );
    }
};
