"use strict"

// https://nodejs.org/api/readline.html Readline
const readline = require('readline');

const rl = readline.createInterface({ //readline name variabel from "const readline"
//standar penulisan input apaun akan di keluarkan
  input: process.stdin,
  output: process.stdout
});




rl.setPrompt('Masukkan Kata : \n')
rl.prompt()
rl.on('line',(input)=>{
  console.log(`Hasilnya : ${input}\nMasukkan Kata Lagi / CTRL+C to Exit:`);
})


// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log('Thank you for your valuable feedback:', answer);
//
//   //rl.close();
// });

// rl.on('pause', (input) => {
//   console.log('Readline paused.');
// });
