const { default: styled } = require('styled-components/native');
const Theme = require('styles/theme');

module.exports = {

    Button: styled.TouchableOpacity`
        background-color: rgba(255,255,255,.1);
        border-color: ${Theme.secondaryColor};
        border-radius: 6px;
        border-width: 1px;
        flex-direction: row;
        justify-content: center;
        margin: 15px 0;
        padding: 10px;
        opacity: 1;
        width: 100%;
    `,
    ButtonText: styled.Text`
        color: ${Theme.secondaryColor};
        font-size: 20px;
        padding-left: 8px;
    `
};
