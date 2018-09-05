const { default: styled } = require('styled-components/native');
const Theme = require('styles/theme');

module.exports = {

    StyledInput: styled.TextInput`
        border-color: ${Theme.secondaryColor};
        border-radius: 6;
        border-width: 1;
        color: ${Theme.secondaryColor};
        font-size: 20px;
        font-weight: 200;
        height: 45px;
        padding-left: 40px;
    `,
    InputContainer: styled.View`
        left: 0;
        right: 0;
        margin-bottom: 10;
        width: 100%;
    `,
    InputIconContainer: styled.View`
        position: absolute;
        flex: 1;
        width: 40px;
        height: 100%;
        justify-content: center;
        align-items: center;
    `
};
