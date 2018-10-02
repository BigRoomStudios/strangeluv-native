const { default: styled } = require('styled-components/native');
const { Card, Form,Item } = require('native-base');

module.exports = {

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
