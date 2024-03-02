function capitalize(word) {
  // Check if the word is not empty
  if (word.length === 0) {
    return word; // Return empty string if word is empty
  }

  // Capitalize the first letter and concatenate it with the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = { capitalize };
