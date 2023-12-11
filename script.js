const extendHex = (shortHex) => {
  // write your code here
	shortHex=shortHex.replace(#,'');
     if(shortHex===3){
	shortHex=shortHex.split('').map(char => char+char).join('');
	 }
	return "#"+shortHex.toUpperCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
