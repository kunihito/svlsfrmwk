const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const client = redis.createClient(6379, 'redis');

const apiSession = session({
    name: 'mockSessionId',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: client }),
    cookie: {
        secure: false,
        httpOnly: false,
    },
});

module.exports = apiSession;
