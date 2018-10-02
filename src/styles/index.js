const { default: styled } = require('styled-components/native');
const DefaultButton = require('components/DefaultButton');
const FooterNav = require('components/FooterNav');
const { Card, Form, Item, Input } = require('native-base');

module.exports = {

    ScrollView: styled.ScrollView.attrs({
        contentContainerStyle: {
            padding: 16
        }
    })
    ``,
    Button: styled(DefaultButton)`
        margin: 10px;
    `,
    Input: styled(Input)`
        padding-left: 6px;
    `,
    FooterNav: styled(FooterNav)`
    `,
    Card: styled(Card)`
        margin: 10px 0 15px 0;
    `,
    Form: styled(Form)`
        padding: 16px;
    `,
    Item: styled(Item)`
        margin-vertical: 8px;
    `
};
