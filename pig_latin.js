"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pig_latin(word) {
  var vowel = ['a','i','u','e','o']
  var firstword = word.slice(0,1);
  var hasil = "";
  for (var i = 0; i < vowel.length; i++) {
    if(firstword==vowel[i]){
      return word
    }else{
      hasil = word.slice(1,word.length) + firstword +"ay"
    }
  }
  return hasil;

}

function pig_latin_sentences(sentences) {
    var arr = sentences.split(" ")
    var hasil = ""
    for (var i = 0; i < arr.length; i++) {
        hasil += pig_latin(arr[i]) + " "
    }
    return hasil
}


rl.setPrompt('Masukkan Kata / Kalimat : \n');
rl.prompt();
rl.on('line', (input) => {
    console.log(`Your Input "${input}" Converted Pig Latin`);
    console.log(pig_latin_sentences(input));
    console.log(`ReInput or CTRL+C to exit`);
});
