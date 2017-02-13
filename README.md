# bunyan-serializer-time
A time serializer for the Bunyan logger. Formats time as `yyyy-mm-dd hh:mm:ss`.

## Installation
Install by npm

```shell
npm install git+https://github.com/lucentminds/bunyan-serializer-time.git
```

### Useage:

```js
var bunyan = require( 'bunyan' );
var bunyanSerlizerTime = require( 'bunyan-serializer-time' );

var logger = bunyan.createLogger({
    serializers: {
        time: bunyanSerlizerTime
    }
});
```