const React = require('react');
const T = require('prop-types');
const StrangeForms = require('strange-forms');

const IsEmail = require('utils/is-email');

const { Text, CardItem, Form, Item, Label } = require('native-base');
const { ScrollView, Button, Input } = require('styles');
const { Card } = require('./styles');

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

            <ScrollView>
                <Card>
                    <CardItem header bordered>
                        <Text>User Login</Text>
                    </CardItem>
                    <Form>
                        <Item stackedLabel>
                            {this.showEmailError() &&
                                <Label>Please enter a valid email address</Label>
                            }
                            <Input
                                hasError={this.showEmailError()}
                                onChangeText={this.proposeNew('email')}
                                onBlur={this.emailFieldBlurred}
                                value={this.fieldValue('email')}
                                placeholder='Email Address'
                                keyboardType='email-address'
                                autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input
                                onChangeText={this.proposeNew('password')}
                                value={this.fieldValue('password')}
                                placeholder='Password'
                                secureTextEntry
                            />
                        </Item>
                        <Item>
                            {this.props.authError &&
                                <Label>{this.props.authError}</Label>
                            }
                        </Item>
                    </Form>
                    {this.inputsAreValid() &&
                        <Button
                            onPress={this.submit}
                            text='LOGIN'
                            icon='md-log-in'
                            iconLeft
                        />
                    }
                </Card>
            </ScrollView>
        );
    }
};
