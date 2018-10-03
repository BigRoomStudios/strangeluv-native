const { default: styled } = require('styled-components/native');
const DefaultButton = require('components/DefaultButton');
const FooterNav = require('components/FooterNav');
const { Card, Form, Item, Input, Text, Container } = require('native-base');

module.exports = {

    ScrollView: styled.ScrollView.attrs({
        contentContainerStyle: {
            padding: 16
        }
    })
    ``,
    Image: styled.Image`
        width: 200px;
        height: 200px;
        margin: 0 auto;
    `,
    Button: styled(DefaultButton)`
        margin: 10px;
    `,
    Input: styled(Input)`
        padding-left: 6px;
    `,
    FooterNav: styled(FooterNav)`
        background-color: #fff;
        padding-top: 4px;
    `,
    Form: styled(Form)`
        padding: 16px 16px 12px 16px;
    `,
    Item: styled(Item)`
        margin-vertical: 8px;
    `,
    Text: styled(Text)`
        margin: 0 auto;
    `,
    Container: styled(Container)`
        background-color: transparent;
    `,
    Card: styled(Card)`
        margin: 10px 0 15px 0;
    `,
    ErrorText: styled(Text)`
        color: red;
        margin: 0 auto;
    `
};
