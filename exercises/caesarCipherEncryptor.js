function caesarCipherEncryptor(string, key) {
    // Write your code here.
      const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const stringArray = string.split("");
    let newString = [];
    
    for (let i = 0; i < stringArray.length; i++) {
      newString.push(getLetterIdx(key, stringArray[i, alphabet))
    }
  
    return newString.join("");
  }
  
  function getLetterIdx(key, letter, alphabet) {
    const newIndex = alphabet.indexOf(letter) + key
  
    return alphabet[newIndex % 26]
  }