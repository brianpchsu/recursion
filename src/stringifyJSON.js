// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  var json = "";

  //Check String situation, seem like we should use '"' but not "'"?! 
  if (type ==='string'){
    json =  '"' + obj + '"';
  }
  //Check Number, Boolean, and null (tricky) situation 
  else if (type === 'number' || type ==='boolean' || !obj){
    json = json + obj;
  }
  //Check the array situation
  else if (Array.isArray(obj)){
    json = '[';
    for (var i = 0; i<obj.length; i++){
      json = json + stringifyJSON(obj[i]);
      if (i <obj.length-1){
        //add comma before the last element in array
        json = json + ',';
      }
    }
    json = json + ']';
  }
  //Chcek the object situation
  else {
    json = '{';
    for (var key in obj){
      //function and undefined??? So apparently we don't want to deal with these. 
      if (key !=='functions' && key !=='undefined'){
        json = json + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    //If there are items in the object, there will be one extra comma in the end
    if (json.length>1){
    json = json.substring(0, json.length-1);
  }
    json = json + '}';
  }
  return json;
};
