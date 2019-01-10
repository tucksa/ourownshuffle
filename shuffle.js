function shuffleArray(array) {
  var colorsLength = array.length;
  var shuffledArr = [];
  
  for (var i = 0; i < colorsLength - 1; i++) {
    // generate a random number between 0 and the length of the array
    var rand = Math.floor(Math.random() * array.length);
    // remove one random element from array
    var partOfArray = array.splice(rand, 1)[0];
    // and push it into shuffledArr 
    shuffledArr.push(partOfArray);
  }
  
  // push the last remaining item onto shuffledArr 
  shuffledArr.push(array[0]);
  return shuffledArr;
}

var colors = ['blue','red','green','black','gray','coral'];

console.log('original array:', colors);
console.log('shuffled array:', shuffleArray(colors));
