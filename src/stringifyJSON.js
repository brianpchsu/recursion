// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  if (type !=='object' || type ===null){
  	if (type ==='string') {
  		return "'" + obj + "'";
  	}  	
  }
  else {
    var key, value;
    var json = [];

    var arr = (obj && obj.constructor == Array);
    for (key in obj){
      value = obj[key];
      type = typeof(value);

      if (obj.hasOwnProperty(key)){
        if (type ==='string'){
          value = "'" + value + "'";
        }
        else if (type ==='object' || type !==null) {
          value = 
        }
      }
    }
  }
};
