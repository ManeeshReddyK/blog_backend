const log4js = require('log4js');

log4js.configure({
    appenders: {
        console: { type: 'console' },
        logs: { type: 'file', filename: 'logs/logs.log' },
        requests: { type: 'file', filename: 'logs/requests.log' }
    },
    categories: {
        LOGS: { appenders: ['logs'], level: 'debug' },
        REQUESTS: { appenders: ['requests'], level: 'debug' },
        default: { appenders: ['console'], level: 'debug' }
    }
});

const logger = log4js.getLogger('LOGS');

module.exports = logger;
