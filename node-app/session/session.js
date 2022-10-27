const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const client = redis.createClient('redis://localhost:6379');

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
