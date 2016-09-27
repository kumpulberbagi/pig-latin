"use strict"

//use readline to fix this challenge
const readline = require('readline');

//function pig_latin
function pig_latin(line) {
   var statusSentence = checkSentence(line);

   if (statusSentence === true) {
     return pig_latin_sentence(line);
   }
   else (statusSentence === false)
   {
      return pig_latin_word(line);
   }
}

function checkSentence(test) {
  var arrSentence = test.split(" ");

  if (arrSentence.length > 1) {
    return true
  }
  else {
    return false;
  }
}

function pig_latin_sentence(line) {
  var result = "";
  var arrSentence = line.split(" ");
  for (var i = 0; i < arrSentence.length; i++) {
    var word = pig_latin_word(arrSentence[i]);
    result += " " + word;
  }
  return result;
}

function pig_latin_word(line) {
  var arrWord = line.split("");
  var vowel = ["a", "i", "u", "e", "o"];
  var result = "";
  for (var i = 0; i < vowel.length; i++) {
    if(arrWord[0] === vowel[i]) {
      result += arrWord.join("") + "ay";
    }
    else {
      var consonan = arrWord.splice(0, 1).join("");
      result += arrWord.join("") + consonan + "ay";
    }
    break;
  }

  return result;
}
//function pig_latin

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'enter your word> '
});

rl.setPrompt("Enter the word you want to convert, or 'quit' to close the program : ");

rl.on('line', (line) => {
  if (line === "quit") {
    rl.close();
  }
  else {
  console.log("Original word : line || Pig latin : ", pig_latin(line));
  rl.prompt(); }
});
