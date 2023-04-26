import base64Url from 'base64-url';

const header = {
    alg: 'HS256',
    typ: 'JWT',
};

const payload = {
    username: 'user1@user.com',
    name: 'Glauber Fernandes',
    exp: new Date().getTime(),
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

console.log(headerEncoded, payloadEncoded);

const key = 'abcd123456';

const crypt = require('crypto');

const signature = crypt.createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('bin');

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`)
