const extendHex = (shortHex) => {
  // Remove '#' if present
  shortHex = shortHex.replace('#', '');

  // Ensure the shortHex has 3 characters
  if (shortHex.length === 3) {
    // Extend each color component to 2 characters
    shortHex = shortHex.split('').map(char => char + char).join('');
  }

  // Convert to uppercase and return the extended hex code with '#'
  return '#' + shortHex;
}


// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
