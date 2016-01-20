//Business Logic

/*
Test a single word to see if it begins with a vowel. If the word
begins with a vowel return true, else return false.
*/
var beginWithVowel = function(word) {
if (word.match(/^[AEIOUaeiou]/)){
    return true;
} else {
  return false;
}

}

/*
Test a single word to see if it begins with a consonant. If the word
begins with a consonant return true, else return false.
*/
var beginWithConsonant = function(word) {
if (word.match(/^[^AEIOUaeiou]/)){
    return true;
} else {
  return false;
}

}

var appendAy = function(word) {
  if (beginWithVowel(word) === true) {
    return word.concat("ay");
  } else (beginWithConsonant === true)
    return removeLeadingConsonantsAndAppend(word).concat("ay");
}

/*
1. If a word begins with a consonant find all leading consonants of that word
2. store all leading consonants in a variable called ConsonantTrimmings
3. Remove value of ConsonantTrimmings from beginning of word and append to word
*/
var removeLeadingConsonantsAndAppend = function(word) {

if (beginWithConsonant(word) === true) {
  var ConsonantTrimmings = word.match(/[^AEIOUaeiou]+/).slice();
  var TrimmedWord = word.replace(ConsonantTrimmings,"");
  return TrimmedWord.concat(ConsonantTrimmings);
}

}


// UI Logic

// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//      var year = parseInt($("input#year").val());
//      var result = leapYear(year);
//
//     $(".year").text(year);
//
// 		if (isNaN(year) || year < 0 ) {
// 			alert("OMG INVALID INPUT");
// 			$(".not").text("not");
// 		}
//     else if (!result) {       // same as writing if (result === false)
//       $(".not").text("not");
// 			$("#result").show();
//     } else {
//       $(".not").text("");
// 			$("#result").show();
//     }
//     event.preventDefault();
//   });
// });
