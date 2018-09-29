const { default: styled } = require('styled-components/native');
const Theme = require('./theme');
const DefaultButton = require('components/DefaultButton');
const InputField = require('components/InputField');

module.exports = {

    ScrollView: styled.ScrollView.attrs({
        contentContainerStyle: {
            paddingHorizontal: 20,
            paddingBottom: 20,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })`
        background-color: ${Theme.primaryBgColor};
        padding: 16px;
    `,
    Duck: styled.Image`
        height: 320px;
        width: 320px;
    `,
    Button: styled(DefaultButton)`
    `,
    Input: styled(InputField)`
    `
};
