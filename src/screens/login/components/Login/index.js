const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');

const IsEmail = require('utils/is-email');

const { Button, Input } = require('styles');

const { Container, Text } = require('native-base');

module.exports = class Login extends StrangeForms(React.Component) {

    static propTypes = {
        login: T.func.isRequired,
        errorMessage: T.string,
        authError: T.string,
        clearErrors: T.func.isRequired
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

    componentDidMount() {

        this.props.clearErrors();
    }

    inputsAreValid() {

        return this.state.email !== '' && this.state.password !== '' && !this.showEmailError();
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

        return (

            <Container>
                <Container>
                    <Text>User Login</Text>
                    <Text>Welcome back to Strangeluv Native!</Text>
                </Container>
                <Input
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
                    <Text>Please enter a valid email address</Text>
                }
                <Input
                    onChangeText={this.proposeNew('password')}
                    value={this.fieldValue('password')}
                    placeholder='Password'
                    iconName='unlock-alt'
                    secureTextEntry
                />
                {this.props.authError &&
                    <Text>{this.props.authError}</Text>
                }
                {this.inputsAreValid() &&
                    <Button
                        onPress={this.submit}
                        text='LOGIN'
                        icon='md-log-in'
                    />
                }
            </Container>
        );
    }
};
