function isPalindrome(string) {
  let reversedString = "";
  for (let i = string.length; i > -1; i--) {
    const letter = string.substr(i, 1);
    reversedString += letter;
  }

  if (reversedString === string) {
    return true;
  }

  return false;
}

console.log(isPalindrome("notpalindrome"));
console.log(isPalindrome("redivider"));
console.log(isPalindrome("anothernonpalindrome"));
