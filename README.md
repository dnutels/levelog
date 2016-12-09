# levelog

A small Node library that determines your current log level.

## Overview

Most logging libraries are just that -- _logging_ libraries. This one is different. It doesn't try to log your messages or connect to some fancy cloud-based aggregation service.

Instead -- it provides you an API that allows you to determine, in code, what your current level is -- based on `process.evn.LOG_LEVEL` environmental variable.

This way you can align your various logging modules (morgan, winston and custom, for instance) to the same value.

## Installation

`npm i -S levelog` should do.

## API

The API is very simple -- provided you required the `log-level` module in the following manner:

```
const LOG_LEVEL = require('log-level');
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
