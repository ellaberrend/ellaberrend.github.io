function shakeMagic8Ball() {
    var question = document.getElementById("question").value;
  
    if (question.trim() === "") {
      document.getElementById("answerText").innerHTML = "Please ask a question!";
      return;
    }
    
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
      "Very doubtful",
      "Why did you even ask that",
      "That was a dumb question",
      "Did you seriously need a Magic 8 Ball to answer that",
      "Yes dummy",
      "I don't answer stupid questions",
      "I'd rather answer a good question",
      "Um, duh..."
    ];
  
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
    document.getElementById("answerText").innerHTML = randomAnswer;
    showAnswer();
  }
  
  const magic8ballImg = document.querySelector('.magic8ball img');
  
  function shakeMagic8BallWithAnimation() {
    magic8ballImg.classList.add('shake');
    setTimeout(function() {
      magic8ballImg.classList.remove('shake');
    }, 500);
  }
  
  document.getElementById("question").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      shakeMagic8Ball();
      shakeMagic8BallWithAnimation();
    }
  });
  
  document.querySelector("button").addEventListener("click", function() {
    shakeMagic8Ball();
    shakeMagic8BallWithAnimation();
  });
  
  const answerElement = document.getElementById("answer");
  
  function showAnswer() {
    answerElement.classList.add("show");
    answerElement.classList.remove("rollup");
    void answerElement.offsetWidth; // Trigger reflow to restart animation
    answerElement.classList.add("rollup");
  }
  
  function hideAnswer() {
    answerElement.classList.remove("show");
  }
  
  setTimeout(hideAnswer, 3000); // hide answer after 3 seconds
  