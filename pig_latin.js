"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  Prompt: 'Pig Latin > '
});

rl.setPrompt("Pig Latin Word : ")
rl.prompt()

rl.on('line', (line) => {
  console.log(`Pg Latin Word: ${pigLatin_word(line)}`);

  rl.setPrompt("Pig Latin Sentence :")
  rl.prompt()

  rl.on('line', (str) => {
    console.log(` Pig Latin Sentence: ${pigLatin_sentence(str)}`);
  });
});
//

// addition


var vowel = ["a", "i", "u", "e", "o"];//vowel
//function to result pig latin
function pigLatin_word(str) {
  var str_neutral = str.toLowerCase(); //string to lower case

  if (str_neutral.split(" ").length === 1 ){//cek string one words using array
    var arr = str_neutral.split('');//make string into array
    if (vowel.includes(arr[0])) {
      return str
    }
    //cek vowel in string's array
    for (var i = 0; i < arr.length; i++) {
      if (vowel.includes(arr[i])) {//found vowel
        var last = str_neutral.split('')  //cut for last word  vowel
        var convert = last.splice(i,str_neutral.length-i).join('')
        //console.log(convert+"test"+i);
        return convert+last.join('')+"ay";
      }
    }
  } else{
    return "Put Only One Word";
  }
}

function pigLatin_sentence(sentence) {
  var sentence_array = sentence.split(" ");
  var result = sentence_array.map(pigLatin_word);
  return result.join(" ");
}
//
// console.log(pigLatin_word("babiii"));
// console.log(pigLatin_word("abay"));
