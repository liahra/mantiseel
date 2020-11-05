const tokenSecret = require('../localenv').TOKEN_SECRET;
const crypto = require('crypto');


function generateToken(payload){
    console.log(tokenSecret);

    //Header
    const header = {
        'alg': 'H256',
        'typ': 'jwt'
    }

    const headerBUF = Buffer.from(JSON.stringify(header), 'utf-8');
    const headerENC = removePadding(headerBUF.toString('base64'));
    console.log(headerENC);
    
    //Payload
    const payloadBUF = Buffer.from(JSON.stringify(payload), 'utf-8');
    const payloadENC = removePadding(payloadBUF.toString('base64'));
    console.log(payloadENC);

    //Signature
    const signString = headerENC+"."+payloadENC;

    const sign = removePadding(crypto.createHmac('sha256', tokenSecret)
    .update(signString, 'base64')
    .digest('base64'));
    console.log(sign);

    //Finished token
    const token = headerENC+"."+payloadENC+"."+sign;
    console.log(token);

}

function removePadding(encodedString){
    let urlEncoded = encodedString.replace(/\//g,'_');
    urlEncoded = urlEncoded.replace(/=/g,'');
    urlEncoded = urlEncoded.replace(/\+/g,'-');
    return urlEncoded;
}

module.exports = {generateToken};