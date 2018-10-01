const React = require('react');
const T = require('prop-types');
const { Icon, Text } = require('native-base');
const { Button } = require('./styles');

module.exports = class DefaultButton extends React.PureComponent {

    static propTypes = {
        icon: T.string,
        text: T.string,
        onPress: T.func.isRequired
    };

    render() {

        return (

            <Button {...this.props}>
                {this.props.icon &&
                    <Icon name={this.props.icon} size={24} />
                }
                {this.props.text &&
                    <Text>
                        {this.props.text}
                    </Text>
                }
            </Button>
        );
    }
};
