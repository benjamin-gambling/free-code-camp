function translatePigLatin(str) {
  return str
  .replace(/^[aeiou]\w*/, "$&way")  /* ^vowel = word + way */
  .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")  /* ^constant = word2 + word1+ ay */
  
  ;
}

console.log(translatePigLatin("eight"));
