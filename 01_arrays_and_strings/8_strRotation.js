// Question 1.8 (5th Edition)
// Question 1.9 (6th Edition)
// Assume you have a method isSubstring which checks if one word is a
// substring of another. Given two strings, s1 and s2, write code to check
// if s2 is a rotation of s1 using only one call to isSubstring
// (e.g. "waterbottle" is a rotation of "erbottlewat").

// Method #1 (not yet working!!)
function strRotation(s1, s2) {
  var curr = '';
  var temp = s1 + s1.shift();
  for (var i = 0; i < s1.length; i++) {
    curr = slice(1, s1.length) + s1[0];
    temp += curr;
  }
}

// Method #2
function strRotation2(rotatedString, match) {
  isSubstring(rotatedString + rotatedString, match);
}
