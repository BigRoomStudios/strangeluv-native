const React = require('react');
const T = require('prop-types');

const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { Title } = GStyles;
const { StylishText, StyledScrollView, TitleContainer } = LStyles;

const InputField = require('components/InputField');
const DefaultButton = require('components/DefaultButton');

module.exports = class Login extends React.PureComponent {

    static propTypes = {
        login: T.func
    };

    constructor() {

        super();

        this.state = {
            email: '',
            password: ''
        };

        this.submit = this._submit.bind(this);
    }

    inputsAreValid() {

        return this.state.email !== '' && this.state.password !== '';
    }

    _submit() {

        const { email, password } = this.state;

        // console.warn(email + ' ' + password);

        this.props.login(email, password);
    }

    render() {

        return (
            <StyledScrollView>
                <TitleContainer>
                    <Title>User Login</Title>
                    <StylishText>Welcome to Strangeluv Native</StylishText>
                </TitleContainer>
                <InputField
                    hasError={false}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    placeholder='Email Address'
                    iconName='envelope'
                    keyboardType='email-address'
                    autoCorrect={false}
                    iconSize={18}
                />
                <InputField
                    hasError={false}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder='Password'
                    iconName='unlock-alt'
                    secureTextEntry
                />
                {this.inputsAreValid() &&
                    <DefaultButton
                        onPress={this.submit}
                        text='LOGIN'
                        icon='sign-in'
                    />
                }
            </StyledScrollView>
        );
    }
};
