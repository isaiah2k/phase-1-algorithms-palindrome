function isPalindrome(string) {
  charArray = string.split(``)
  reverseCharArray = charArray.reverse()
  reversedString = reverseCharArray.join(``)
  return string === reversedString
}

/* 
define a fucntion isPalindrome takes a string as its argument
split the string
reverse the string
join it together
compare
*/

/*
is palindrome takes a string as its parameter
it splits the string into individual letters
then it reverses those letters
then it joins the reversed string together
if reversed string === the argument return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log(isPalindrome("racecar"))
}

module.exports = isPalindrome;
