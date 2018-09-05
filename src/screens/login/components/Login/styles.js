const { default: styled } = require('styled-components/native');
const { Text, ScrollView } = require('styles');
const Theme = require('styles/theme');

module.exports = {

    StylishText: styled(Text)`
        color: ${Theme.primaryColor};
        padding-top: 8px;
    `,
    StyledScrollView: styled(ScrollView)`
      background-color: ${Theme.primaryBgColor};
    `,
    TitleContainer: styled.View`
      padding: 16px;
    `
};
