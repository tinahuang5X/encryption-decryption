function encrypt(string) {
  newString = string.slice(3) + string.slice(0, 3).toUpperCase();
  return newString;
}

function decrypt(string) {
  let stringLength = string.length;
  newString =
    string.slice(stringLength - 3).toLowerCase() +
    string.slice(0, stringLength - 3);
  return newString;
}
