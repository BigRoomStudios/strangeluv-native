const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');

const IsEmail = require('utils/is-email');

const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { Title, ErrorText } = GStyles;
const { StylishText, StyledScrollView, TitleContainer } = LStyles;

const InputField = require('components/InputField');
const DefaultButton = require('components/DefaultButton');

module.exports = class Signup extends StrangeForms(React.Component) {

    static propTypes = {
        signup: T.func.isRequired,
        errorMessage: T.string,
        authError: T.string
    };

    constructor(props, context) {

        super(props, context);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            hasEmailBlurred: false
        };

        this.submit = this._submit.bind(this);
        this.getFormValue = this._getFormValue.bind(this);
        this.emailFieldBlurred = this._emailFieldBlurred.bind(this);

        this.strangeForm({
            fields: ['firstName', 'lastName', 'email', 'password'],
            get: (someProps, field) => this.state[field],
            act: (field, value) => this.setState({ [field]: value }),
            getFormValue: this.getFormValue
        });
    }

    inputsAreValid() {

        return this.state.password !== ''
        && this.state.firstName !== ''
        && this.state.lastName !== ''
        && IsEmail(this.state.email);
    }

    _getFormValue(value) {

        return value;
    }

    _submit() {

        const { email, password, firstName, lastName } = this.state;

        this.props.signup({ email, password, firstName, lastName });
    }

    _emailFieldBlurred() {

        this.setState({ hasEmailBlurred: true });
    }

    showEmailError() {

        return this.state.hasEmailBlurred && !IsEmail(this.state.email);
    }

    render() {

        return (

            <StyledScrollView>
                <TitleContainer>
                    <Title>User Signup</Title>
                    <StylishText>Signup with Strangeluv Native</StylishText>
                </TitleContainer>
                <InputField
                    onChangeText={this.proposeNew('firstName')}
                    value={this.fieldValue('firstName')}
                    placeholder='First Name'
                    iconName='user'
                    autoCorrect={false}
                    iconSize={18}
                />
                <InputField
                    onChangeText={this.proposeNew('lastName')}
                    value={this.fieldValue('lastName')}
                    placeholder='Last Name'
                    iconName='user'
                    autoCorrect={false}
                    iconSize={18}
                />
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
                        text='SIGNUP'
                        icon='user'
                    />
                }
            </StyledScrollView>
        );
    }
};
