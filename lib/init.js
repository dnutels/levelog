'use strict';

function DEFAULT_DECIDER(level) {
    return (process.env.LOG_LEVEL === level);
}

module.exports = function init(decider = DEFAULT_DECIDER, defaultLevel = 'TRACE') {
    const LOG_LEVEL = {
        TRACE: decider('TRACE'),
        DEBUG: decider('DEBUG'),
        INFO: decider('INFO'),
        WARNING: decider('WARNING'),
        ERROR: decider('ERROR'),
        FATAL: decider('FATAL')
    };

    if (typeof process.env.LOG_LEVEL !== 'string') {
        LOG_LEVEL[defaultLevel] = true;
    }

    return  Object.freeze(LOG_LEVEL);
};
