Array.prototype.isSubsetOf = function(collection){
  var result = false;
  var mem = {};
  for(var i =0 ; i<collection.length ; i++){
    if(!mem[collection[i]]){
      mem[collection[i]] = collection[i];
    }
  }
  for(var j = 0 ; j<this.length ; j++){
    if(!(this[j] in mem)){
      return false;
    } else{
      result = true;
    }
  }
  return result;
};
