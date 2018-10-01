const { default: styled } = require('styled-components/native');
const DefaultButton = require('components/DefaultButton');
const InputField = require('components/InputField');

module.exports = {

    ScrollView: styled.ScrollView.attrs({
        contentContainerStyle: {
            padding: 16
        }
    })``,
    Button: styled(DefaultButton)`
    `,
    Input: styled(InputField)`
    `
};
