"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("Masukkan Kata Disini?");
rl.prompt();
rl.on('line', (input) => {
  conPigLatinKalimat(input);
});

var conPigLatinKalimat = function (kalimat) {
  kalimat = kalimat.split(" ");
  var gabung = [];
  for (var i = 0; i < kalimat.length; i++) {
    var x = conPigLatin(kalimat[i]);
    gabung.push(x);
  }
  console.log(gabung.join(" "));
  console.log("jumlah kalimat yang diubah: " + kalimat.length);
  return;
}

var conPigLatin = function (word) {
  word = word.toLowerCase();
  word = word.split("");
  var vowel = ["a", "i", "u", "e", "o"];
  var firstLetter = word.slice(0, 1);
  if (firstLetter == "a" || firstLetter == "i" || firstLetter == "u" || firstLetter == "e" || firstLetter == "o") {
    word = word.join("");
    return word;
  } else {
    word.splice(0, 1);
    word = word.join("");
    word = (word + firstLetter + "ay");
    return word
  }
}
