const { Duck } = require('styles');
const { default: styled } = require('styled-components/native');

module.exports = {
    Duck: styled(Duck)`
        margin-top: 20px;
        width: 120px;
        height: 120px;
    `
};
