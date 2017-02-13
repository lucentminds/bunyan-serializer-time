# bunyan-serializer-time
A time serializer for the Bunyan logger. Formats time as `yyyy-mm-dd hh:mm:ss`.

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