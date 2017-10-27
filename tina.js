function encrypt(string) {
  newString = string.slice(3) + string.slice(0, 3).toUpperCase();
  return newString;
}
