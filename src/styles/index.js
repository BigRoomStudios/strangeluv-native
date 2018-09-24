const { default: styled } = require('styled-components/native');
const Theme = require('./theme');

const StyledText = styled.Text`
    color: ${Theme.primaryTextColor};
`;

const Text = StyledText;

const ScrollView = styled.ScrollView.attrs({
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
`;

module.exports = {

    ScrollView,
    Text,
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
    StylishText: styled(Text)`
        color: ${Theme.primaryColor};
        padding-top: 8px;
    `,
    ErrorText: styled(Text)`
        color: red;
        padding-top: 4px;
        padding-bottom: 4px;
    `,
    StyledScrollView: styled(ScrollView)`
      background-color: ${Theme.primaryBgColor};
    `,
    TitleContainer: styled.View`
      padding: 16px;
    `,
    InheritStylesText: styled(Text)`
        color: ${(props) => props.color || Theme.secondaryColor}
    `
};
