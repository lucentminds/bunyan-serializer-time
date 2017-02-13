/**
 * 10-18-2016
 * A time serializer for the Bunyan logger. Formats time as yyyy-mm-dd hh:mm:ss.
 * ~~ Scott Johnson
 */


/** List jshint ignore directives here. **/
/* jslint node: true */

/** 
 * Formats time as "yyyy-mm-dd hh:mm:ss".
 */
var timeFormat = module.exports = function(){ // jshint ignore:line
	var d = new Date();
	var yyyy = d.getFullYear();
	var mm = padL( d.getMonth()+1, 2 );
	var dd = padL( d.getDate(), 2 );
	var h = padL( d.getHours(), 2 );
	var m = padL( d.getMinutes(), 2 );
	var s = padL( d.getSeconds(), 2 );

	return ''.concat( [yyyy,mm,dd].join( '-' ),' ',[h,m,s].join( ':' ) );
};// /timeFormat()


function padL(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
