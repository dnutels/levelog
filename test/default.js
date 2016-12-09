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

    it('is set to TRACE, when not specified', function() {
        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, true);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to TRACE properly', function() {
        process.env.LOG_LEVEL = 'TRACE';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, true);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to DEBUG properly', function() {
        process.env.LOG_LEVEL = 'DEBUG';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, true);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to INFO properly', function() {
        process.env.LOG_LEVEL = 'INFO';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, true);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to WARNING properly', function() {
        process.env.LOG_LEVEL = 'WARNING';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, true);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to ERROR properly', function() {
        process.env.LOG_LEVEL = 'ERROR';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, true);
        assert.equal(LOG_LEVEL.FATAL, false);
    });

    it('is set to FATAL properly', function() {
        process.env.LOG_LEVEL = 'FATAL';

        const LOG_LEVEL = cleanRequire('../lib/default');

        assert.equal(LOG_LEVEL.TRACE, false);
        assert.equal(LOG_LEVEL.DEBUG, false);
        assert.equal(LOG_LEVEL.INFO, false);
        assert.equal(LOG_LEVEL.WARNING, false);
        assert.equal(LOG_LEVEL.ERROR, false);
        assert.equal(LOG_LEVEL.FATAL, true);
    });
});
