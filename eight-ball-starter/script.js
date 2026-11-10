/*
  Magic 8 Ball
  Name: Andriy G
  Period: 4
*/

 // get input Values
function askEightBall() {
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;
  console.log(userName, userQuestion)

 // show the question on site
 document.getElementById('questionOut').textContent = "You asked: " + userQuestion;

  //Greet the user/
  let greeting

  if (userName === ""){
    greeting = "Hello Mystery Person!"
  } else {
    greeting = `Hello, ${userName}!`
  }

document.getElementById('greeting').textContent = greeting;

//check the question
if (userQuestion ==='') {
document.getElementById('questionOut').textContent = ''
document.getElementById('answer').textContent = 'The 8 ball needs a question!'
document.getElementById('answerType').textContent = 'YES/NO/MAYBE'
document.getElementById('answerType').className = 'answer-type'
return
}
//get a random number 
let randomNumber = Math.floor(Math.random() * 8);
//get the magic 8balls answer
console.log(userName + ", " + userQuestion)

switch (randomNumber) {
  case 0:
    document.getElementById('answer').textContent = 'It is certain';
    break;
  case 1:
    document.getElementById('answer').textContent = 'It is decidedly so';
    break;
  case 2:
    document.getElementById('answer').textContent = 'Signs point to yes';
    break;
  case 3:
    document.getElementById('answer').textContent = 'sources say yes';
    break;
  case 4:
    document.getElementById('answer').textContent = 'Perchance';
    break;
  case 5:
    document.getElementById('answer').textContent = 'My sources say no';
    break;
  case 6:
    document.getElementById('answer').textContent = 'Outlook not so good';
    break;
  case 7:
    document.getElementById('answer').textContent = 'Nope try again';
    break;
}
// Set the badge category based on the answer selected above.
const answerType = document.getElementById("answerType");
if (randomNumber <= 3) {
  answerType.textContent = "YES";
  answerType.className = "answer-type yes";
} else if (randomNumber === 4) {
  answerType.textContent = "MAYBE";
  answerType.className = "answer-type maybe";
} else {
  answerType.textContent = "NO";
  answerType.className = "answer-type no";
}

}
