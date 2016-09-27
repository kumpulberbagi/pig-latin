"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Masukkan kata? ')
rl.prompt();
rl.on("line", (answer) => {
  // TODO: Log the answer in a database

  var kata=[];
  var count=0;
  kata = answer.split(" ");
  if(kata.length == 1) {
    single(answer,0); //0 buat kata
  }
  else {
    var kalimat = [];
    kalimat = kata;
    for(var i = 0;i<kalimat.length; i++){
      // console.log("kalimat split: " +kalimat[i]);
      single(kalimat[i],1);
    }
  }

  function single(answer, flag) {

    kata = answer.split("");
    // console.log("kalimat split: " +kata);
    if(kata[0] == 'a' || kata[0] == 'i' || kata[0] == 'u' || kata[0] == 'e' || kata[0] == 'o') {
      // console.log('kata: ', kata);
    }
    else {
      var temp= kata[0];
      kata.shift();
      if(flag == 0) {
        console.log(kata.join("") + temp[0] + "ay");
      }
      else {
        console.log(kata.join("") + temp[0] + "ay");
        count++;
      }
    }
  }
  console.log("Jumlah kata yang di convert: " + count);

  rl.close();
});
