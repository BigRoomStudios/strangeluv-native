const { default: styled } = require('styled-components/native');
const Theme = require('./theme');

const StyledText = styled.Text`
    color: ${Theme.primaryTextColor};
`;

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
    Text: StyledText,
    Title: styled(StyledText)`
        font-size: 19px;
        font-weight: bold;
        text-align: center;
    `,
    Duck: styled.Image`
        height: 320px;
        width: 320px;
    `,
    Button: styled.Button`
        border: 1px solid blue;
        padding: 100px;
    `,
    ErrorText: styled.Text`
        color: red;
        padding-bottom: 12px;
    `
};
