
function iterativeLog( array ) {
    array.forEach((element,index, array) => {
    console.log(`${index}: ${element}`)
  })

}
//-------------------------------------------------
function iterate( callback ) {
  var tempArray = ["Hello", "Good-Bye!", "Welcome"];
   
  tempArray.forEach(callback);

  return tempArray;
}

//------------------------------------------------
function doToArray( array, callback ) {
  array.forEach( callback );
}