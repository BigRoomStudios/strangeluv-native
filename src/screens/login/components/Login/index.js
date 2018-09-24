const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');

const IsEmail = require('utils/is-email');

const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { Title, InheritStylesText } = GStyles;
const { StylishText, ErrorText, StyledScrollView, TitleContainer } = LStyles;

const InputField = require('components/InputField');
const DefaultButton = require('components/DefaultButton');

module.exports = class Login extends StrangeForms(React.Component) {

    static propTypes = {
        login: T.func.isRequired,
        errorMessage: T.string,
        authError: T.object
    };

    constructor(props, context) {

        super(props, context);

        this.state = {
            email: '',
            password: '',
            hasEmailBlurred: false
        };

        this.submit = this._submit.bind(this);
        this.getFormValue = this._getFormValue.bind(this);
        this.emailFieldBlurred = this._emailFieldBlurred.bind(this);

        this.strangeForm({
            fields: ['email', 'password'],
            get: (someProps, field) => this.state[field],
            act: (field, value) => this.setState({ [field]: value }),
            getFormValue: this.getFormValue
        });
    }

    inputsAreValid() {

        return this.state.email !== '' && this.state.password !== '';
    }

    _getFormValue(value) {

        return value;
    }

    _submit() {

        const { email, password } = this.state;

        this.props.login({ email, password });
    }

    _emailFieldBlurred() {

        this.setState({ hasEmailBlurred: true });
    }

    showEmailError() {

        return this.state.hasEmailBlurred && !IsEmail(this.state.email);
    }

    render() {

        const { navigation, isAuthenticated } = this.props;

        return (
            <StyledScrollView>
                <TitleContainer>
                    <Title>User Login</Title>
                    <StylishText>Welcome to Strangeluv Native</StylishText>
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
                <InputField
                    onChangeText={this.proposeNew('password')}
                    value={this.fieldValue('password')}
                    placeholder='Password'
                    iconName='unlock-alt'
                    secureTextEntry
                />
                {this.props.authError &&
                    <ErrorText>{this.props.authError}</ErrorText>
                }
                {this.inputsAreValid() &&
                    <DefaultButton
                        onPress={this.submit}
                        text='LOGIN'
                        icon='sign-in'
                    />
                }
                {!isAuthenticated && <InheritStylesText onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot Your Password?
                </InheritStylesText>}
                {!isAuthenticated && <InheritStylesText onPress={() => navigation.navigate('ResetPassword')}>
                    Reset Your Password
                </InheritStylesText>}
            </StyledScrollView>
        );
    }
};
