let Score = document.getElementById("score");
let showResult = document.getElementById("result");
let showAttempt = document.getElementById("attempt");
let input = document.querySelector("#userinput");
let chance = 0;
let randNum = Math.floor(Math.random() * 100) + 1;
function submit() {
   let choice = input.value;
   if (randNum == choice) {
      showResult.style.color = "green"
      showResult.innerText = "congrats !  you got the right num";
      Score.innerText += 100 - chance;
   }
   else if (choice < randNum) {
      showResult.innerText = "the value is greater than your choice";
      chance++;
      showAttempt.innerText = "attempt " + chance;
      input.value = "";
      document.getElementsByName('text')[0].placeholder = 'enter big value';
   }
   else if (choice > randNum) {
      showResult.innerText = "the value is less than your choice";
      chance++;
      showAttempt.innerText = "attempt " + chance;
      input.value = "";
      document.getElementsByName('text')[0].placeholder = 'enter small value';

   }
}




// // const prompt = require("prompt-sync")();
// let randNum = Math.floor(Math.random()*100)+1;
// let chance=0,choice;

// function submit(){
//  choice=input.value;
//    cal();
// }

// function cal(){
// do{
// //   choice = prompt("enter your choice  ");
//    choice= input.value;
//   choice=Number.parseInt(choice);
//   console.log(choice);
//  if(choice>randNum){
//     console.log("the value is less than your choice");
//     chance++;
//  }
//  else if(choice<randNum){
//     console.log("the value is greater than your choice");
//     chance++;
//  }
//  else{
//     console.log("you got the correct number");
//     console.log("the correct value is :  "+randNum);
//    //  console.log("your score : "+(100-chance));
//    Score.innerText=100-chance;
//  }
// }while(choice!=randNum);
// }
