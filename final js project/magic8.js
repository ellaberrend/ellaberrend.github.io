function shakeMagic8Ball() {
    // Get the user's question from the input field
    var question = document.getElementById("question").value;
    
    // If the user did not input a question, display an error message
    if (question.trim() === "") {
      document.getElementById("answerText").innerHTML = "Please ask a question!";
      return;
    }
    
    // Create an array of possible answers
    var answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "Outlook not so good",
      "My sources say no",
      "Very doubtful"
    ];
  
    // Generate a random answer from the array
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
    // Display the answer within the webpage
    document.getElementById("answerText").innerHTML = randomAnswer;
  }
  
  // Get the magic 8 ball image element
const magic8ballImg = document.querySelector('.magic8ball img');

// Add the "shake" class to the magic 8 ball image element
magic8ballImg.classList.add('shake');

// Remove the "shake" class from the magic 8 ball image element after the animation completes
setTimeout(function() {
  magic8ballImg.classList.remove('shake');
}, 500);
