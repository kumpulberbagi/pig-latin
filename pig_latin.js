//Convert Single Word
const readline = require('readline')

function converSingleWord(word)
{
 var vokal = ['a','i','u','e','o']
 var kata=''
 for(var i=0;i<word.length;i++)
 {
   if(word[i] === vokal[i])return word
 }

 for(var i=0;i<word.length;i++){
   for(var j=0;j<vokal.length;j++)
   {
     if(word[i].toLowerCase() != vokal[j].toLowerCase()){
         if(j == vokal.length - 1){
         kata += word[i];
       }
       } else {
       return word.substr(1) + kata + "ay";
       }
   }
 }
}

function converCompleteSentence(kalimat)
{
     var kalimat = kalimat.split(' ');
     var kalimatBaru = ''
     for(var index=0;index<kalimat.length;index++)
     {
       if(index==0)kalimatBaru = converSingleWord(kalimat[index])
       else kalimatBaru += " "+converSingleWord(kalimat[index])
     }
     return kalimatBaru;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input kata atau kalimat : ', (answer) => {
  console.log('Hasil : ',converCompleteSentence(answer));
  rl.close();
});
