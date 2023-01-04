function findShort(s) {
  // Split the string into an array of words
  const words = s.split(' ');

  // Set the initial minimum length to the length of the first word
  let minLength = words[0].length;

  // Iterate through the array of words
  for (const word of words) {
    // If the current word is shorter than the current minimum length, update the minimum length
    if (word.length < minLength) {
      minLength = word.length;
    }
  }

  // Return the minimum length
  return minLength;
}
