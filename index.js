//Remove Falsy Bouncer
function bouncer(arr) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        newArr.push(arr[i]);
      }
    }
    return newArr
  }
  
  bouncer([7, "ate", "", false, 9]);



  //Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for(let i = 0; i < arr.length; i+= size){
      newArr.push(arr.slice(i, i+size))
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);