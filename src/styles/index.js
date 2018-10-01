const { default: styled } = require('styled-components/native');
const DefaultButton = require('components/DefaultButton');
const InputField = require('components/InputField');
const FooterNav = require('components/FooterNav');

module.exports = {

    ScrollView: styled.ScrollView.attrs({
        contentContainerStyle: {
            padding: 16
        }
    })``,
    Button: styled(DefaultButton)`
    `,
    Input: styled(InputField)`
    `,
    FooterNav: styled(FooterNav)`
    `
};
