# levelog

A small Node library that determines your current log level.

## Overview

Most logging libraries are just that - __logging__ libraries. __This one is different__. It doesn't try to log your messages or connect to some fancy cloud-based aggregation service.

Instead - it provides you an API that allows you to determine, in code, what your current level is - based on `process.evn.LOG_LEVEL` environmental variable.

This way you can align your various logging modules (morgan, winston and custom, for instance) to the same value.

## Installation

`npm install --save-dev levelog`

## API

The API is very simple - provided you required the `levelog` module in the following manner:

```
const LOG_LEVEL = require('levelog');
```

`LOG_LEVEL` provides the following __immutable__ properties:

- `TRACE`
- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `FATAL`

each corresponding to the current log level as set by `process.env.LOG_LEVEL`.

## Custom Decision Function

You can, alternatively, override the function that determines the log level and the default log level (`INFO` instead of `TRACE`, in example below):

```
const init = require('levelog/lib/custom');

LOG_LEVEL = init(function(level) {
    return (process.env.LOG_LEVEL === level.toLowerCase());
}, 'INFO');
```

which would then allow you to call the same API:

```
if (LOG_LEVEL.INFO) {
    // do something when the log level is set to INFO
}
```

## Future Plans

In addition to the current API, there will be a comparative API that would look something like this:

```
if (LOG_LEVEL.greaterOrEqual(INFO)) {
    // do something when the log level is set to INFO
}
```
