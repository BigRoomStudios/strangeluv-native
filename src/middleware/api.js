const { env } = require('./env');

const { AsyncStorage } = require('react-native');

const errorHandler = (err) => {

    return err._bodyText ? JSON.parse(err._bodyText).message : 'Network error, please try again.';
};

module.exports = async function setRequestHeader() {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const auth = await AsyncStorage.getItem('auth_token');

    if (auth) {
        headers = Object.assign(headers, { 'Authorization': 'Bearer ' + auth });
    }

    return headers;
};

module.exports = async function api(path, method, body) {

    try {
        const response = await fetch(env.protocol + env.url + '/' + path, {
            method,
            headers: await exports.setRequestHeader(),
            body: JSON.stringify(body)
        });
        return response;
    }
    catch (err) {
        return errorHandler(err);
    }
};

module.exports = async function queryApi(path, method, query) {

    try {
        const response = await fetch(env.protocol + env.url + '/' + path + query, {
            method,
            headers: await exports.setRequestHeader()
        });
        return response;
    }
    catch (err) {
        return errorHandler(err);
    }
};
