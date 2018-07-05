//


var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func){
    var results = [];

    //applys func over every element in arr
    for (index in arr){
        var tempElement = arr[index];
        //adds converted element into results array
        results[index] = func(tempElement);
    }
    
    return results;
}

//calling map, passes in length function
map(words, function(word) {
  return word.length;
});

//calling map, passes in uppercase function
map(words, function(word) {
  return word.toUpperCase();
});

//calling map, passes in reverse function
map(words, function(word) {
  return word.split('').reverse().join('');
});

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

