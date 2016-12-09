'use strict';

const {describe, it, beforeEach, afterEach} = require('mocha');
const assert = require('assert');

function cleanRequire(path) {
    const module = require(path);
    delete require.cache[require.resolve(path)];

    return module;
}

describe('Log level', function() {

    beforeEach(function() {
        delete process.env.LOG_LEVEL;
    });

    it('can have arbitrary decider function with default', function() {
        const init = cleanRequire('../lib/init');

        const LOG_LEVEL = init(function(level) {
            return (process.env.LOG_LEVEL === level.toLowerCase());
        }, 'INFO');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, true);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('can have arbitrary decider function with no default', function() {
        process.env.LOG_LEVEL = 'warning';

        const init = cleanRequire('../lib/init');

        const LOG_LEVEL = init(function(level) {
            return (process.env.LOG_LEVEL === level.toLowerCase());
        }, 'INFO');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, true);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });
});
