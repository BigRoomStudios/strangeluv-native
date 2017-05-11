const React = require('react');
const { ScrollView, Text, Button } = require('react-native');

const gStyles = require('styles'); // global styles

class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync, style } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>
                <Text style={style.title}>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
                <Button
                    onPress={increment}
                    title='Increment'
                    style={style.button}
                />
                <Text>{' '}</Text>
                <Button
                    onPress={doubleAsync}
                    title='Double (Async)'
                    style={style.button}
                />
            </ScrollView>

        );
    }
}

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
};

module.exports = gStyles.addStyleHelpers(Counter);
