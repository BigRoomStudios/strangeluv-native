const { default: styled } = require('styled-components/native');
const { Card, Container, Footer, Text } = require('native-base');

module.exports = {
    Duck: styled.Image`
        width: 200px;
        height: 200px;
        margin: 0 auto;
    `,
    Text: styled(Text)`
        margin: 0 auto;
    `,
    Container: styled(Container)`
        background-color: #888;
    `,
    Card: styled(Card)`
        margin: 10px 0 15px 0;
    `,
    Footer: styled(Footer)`
        background-color: #fff;
    `
};
