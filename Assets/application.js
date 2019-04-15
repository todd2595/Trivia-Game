$(document).ready(function () {
  var questions = [
    {
      prompt: "Who is the starting cetner of the Philadelphia 76ers?",
      choices: ["Karl Anthony-Towns", "Al Horford", "Demarcus Cousins", "Joel Embiid"],
      answer: 3
    },
    {
      prompt: "Who was the number one pick of the 2016 draft?",
      choices: ['Donnovan Mitchell', 'Ben Simmons', 'Markelle Fultz', 'Jaylen Brown',],
      answer: 1
    },
    {
      prompt: "This player was aquired by the Philadelphia 76ers by a trade involving Minnesota.",
      choices: ["Jimmy Butler", "Amir Johnson", "Kris Dunn", "Rodney Hood"],
      answer: 0
    }
  ]
  var score = 0;
  var count = 30;
  var countingID;
  var questionsCorr = 0;
  var questionAns = 0;
  var questionsWrg = 0;
  var timer;
  var sixerSong = document.createElement("audio");
  sixerSong.setAttribute("src", "Assets/Audio/sixers.mp3");
  $(".theme-button").on("click", function () {
    sixerSong.play();
  });
  $(".pause-button").on("click", function () {
    sixerSong.pause();
  });

  $("#start").on("click", run);

  function run() {
    // clearInterval(countingId);
    // countingId = setInterval(decrement, 1000);
    timer = setInterval(timeLeft, 1000);
    for (var i = 0; i < questions.length; i++) {
      var questionshtml = "<h1>" + questions[i].prompt + "</h1>";
      var choiceshtml = 
        `<input type='radio' class="question-0" value="0" name="${i}"><p>${questions[i].choices[0]}</p>
        <input type='radio' class="question-0" value="1" name="${i}"><p>${questions[i].choices[1]}</p>
        <input type='radio' class="question-0" value="2" name="${i}"><p>${questions[i].choices[2]}</p>
        <input type='radio' class="question-0" value="3" name="${i}"><p>${questions[i].choices[3]}</p>`;
      $("#questions").append(questionshtml + choiceshtml);
    }
  
  }
  $("#sumbit").on("click", checkAns)

  function timeLeft() {
    count--
    $("#time-left").html(count)
    if (count === 0) {
      checkAns();
      clearInterval(timer);
      alert("Times up!")
    }

  }
// function clearBox (quest){
//   document.getElementById(quest).html("");
// }
  
  function checkAns(){
    clearInterval(timer);
    // clearBox();
    for(i=0; i < questions.length; i++ ){
      if($(`input[name="${i}"]:checked`).val() == questions[i].answer){
        questionsCorr++;
      }
      else {
        questionsWrg++;
      }
    }
    $("#questions").html("");
    $("#questions").prepend("you got " + questionsCorr + " out of 3")
    // $(".results").html("you got " + questionsCorr + "out of 3")
    console.log(questionAns);
    console.log(questionsWrg);
  }

  });