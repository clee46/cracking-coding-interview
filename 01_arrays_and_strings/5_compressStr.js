// Question 1.5
// Implement a method to perform basic string
// compression using the counts of repeated
// characters. For example, the string aabcccccaaa
// would become a2blc5a3. If the "compressed" string
// would not become smaller than the orig- inal string,
// your method should return the original string.

// Method #1
function compressStr(str) {
  var res = '';
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    }
    if (str[i] !== str[i+1] || i === str.length) {
      res += str[i] + count;
      count = 1;  // reset count
    }
  }
  if (res.length > str.length) return str;
  else return res;
}
console.log(compressStr('aabcccccaaa'));
