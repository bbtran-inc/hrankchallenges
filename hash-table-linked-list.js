class HashTableLinkedList {
  constructor() {
   this._limit = 10;
   this._storage = LimitedArray(this._limit);
  }
  insert(key,value) {
    const index = getIndexBelowMaxForKey(key, this._limit);
    let bucket = this._storage.get(index);
    if(!bucket) {
      var node = new Node({key,value, index});
      console.log("Added node: ", node);
      bucket = this._storage.set(index, node);
      console.log("New Bucket:", this._storage.get(index));
    } else {
      bucket = this._storage.get(index);
      console.log("HT Bucket:", bucket);
      let endNode = new Node({key, value, index});
      console.log("endNode: ", endNode);
      let currNode = bucket;
      while( currNode.next !== null ) {
        if( currNode.data.key === key ) {
          currNode.data.value = value;
        }
      }
      currNode.next = endNode;
    }
  }
  retrieve(key){
    const index = getIndexBelowMaxForKey(key, this._limit);
    let bucket = this._storage.get(index);
    let result = null;
    if(bucket === null){
      return null;
    } else{
      bucket = this._storage.get(index);
      let currNode = bucket;
      console.log("We are here!", currNode);
      while ( currNode.next !== null ) {
        console.log("Made it in here!", currNode)
        if( currNode.data.key === key ) {
          console.log("Made it here too!", currNode)
          result = currNode.data.value;
          return result;
        }
      }
      result = currNode.data.value;
    }
    return result;
  }
  remove(key) {
    let index = getIndexBelowMaxForKey(key,this._limit);
    let bucket = this._storage.get(index);
    if(bucket.data.key === key){
      bucket = bucket.next;
      this._storage.set(index,bucket);
    } else{
      let currNode = bucket;
      console.log("Remove is called!", bucket);
      while( currNode.next !== null ) {
        if( currNode.data.key === key ) {
          let nextNode = currNode.next;
          currNode.next = nextNode;
        }
      }
    }
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// -----------------------HELPERS (NOT MY CODE, DO NOT EDIT) -------------------- //

// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

let LimitedArray = function(limit){
  let storage = [];

  let limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(let i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  let checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
let getIndexBelowMaxForKey = function(str, max){
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
