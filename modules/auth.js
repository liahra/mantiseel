const credentials = require('../localenv').DATABASE_URL || process.env.DATABASE_URL;
const storage = require('./storage');
const encrypt = require('./cryptCompare');

const db = new storage(credentials);

const authenticator = async (req, res, next) => {
    console.log('Authenticating....');
    //If no authorization header:
    
    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1){
        return res.append("WWW-Authenticate", 'Basic realm="User Visible Realm", charset="UTF-8"').status(401).end();
    } else {
        const credentials = req.headers.authorization.split(' ')[1];
        const [username, password] = Buffer.from(credentials, 'base64').toString('UTF-8').split(":");

        //Retrieve username and password from database
        let user, passwordFromDB;
        if(username){
            user = await db.getUser(username);
            if(user){
                passwordFromDB = user.password;
            } else {
                console.log('User does not exist');
                return;
            }
            
        }
        
        //If password OK - login = ok
        if(encrypt.comparePasswords(encrypt.encryptPassword(password), passwordFromDB)){
            req.login = true;
            next();
        } else {
           req.login = false;
           next();
        }
    }
}

module.exports = authenticator;