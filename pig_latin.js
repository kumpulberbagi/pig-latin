"use strict"

//use readline to fix this challenge
const readline = require ('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.setPrompt("Please input a word ")
rl.prompt()
rl.on ('line', (input) => {
function piglatin (word){
    var kata = word.split('')
    var suffix = "ay"
    var cons = ""
    var pos = word.search(/[aeiou]/i)
    if (pos == 0){
        return word
    }
    else{
        cons = word.slice(0, pos)
        return (word.slice(pos) + cons + suffix)

    }
  }
function clean (sentence){
    var str = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
    return str
  }
function separate (sentence)
  {
    var sentence = sentence.split(" ")
    return sentence
  }

    var cleaned = clean(input)
    var array = separate(cleaned)
    var newArray = []
    var count = 0
    var out = ""
    for ( var i = 0; i < array.length; i++){
      newArray.push(piglatin(array[i]))
      if (piglatin(array[i]) != array[i]){
        count += 1
      }
    }
    out = newArray.join(" ")
    console.log(out)
    console.log(count)

    rl.close()
})
