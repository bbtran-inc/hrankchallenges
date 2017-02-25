/* Deep Equality
Write a function that, given two objects,
returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same,
and so is the structure of each of their corresponding descendants. */

deepEquals = function(a, b){
  var flag = true;
  if(Object.keys(a).length ===0 && Object.keys(b).length === 0){
    flag = true;
  }
  if(Object.keys(a).length !== Object.keys(b).length){
    flag = false;
    return flag;
  }
  var recurse = function(obj1,obj2){
    for(var key in obj1){
      if(obj1[key] !== obj2[key]){
        flag = false;
      } else{
        flag = true
      }
      if(typeof obj1[key] === 'object'){
        recurse(obj1[key],obj2[key]);
      }
    }
  };
  recurse(a,b);
  return flag;
};

// SOLUTION 2
var deepEquals = function(a, b) {
  if ((a instanceof Array) && (b instanceof Array)){
    if (a.length !== b.length) return false;
    for(var i = 0; i < a.length; i++){
      if(!deepEquals(a[i],b[i])) return false;
    }
    return true;
  }
  if ((a instanceof Object) && (b instanceof Object)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (var key in a) {
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a === b;
};
