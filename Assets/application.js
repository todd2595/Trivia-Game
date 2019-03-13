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
  
  var sixerSong = document.createElement("audio");
  sixerSong.setAttribute("src", "Assets\Audio\sixers.mp3");
  $(".theme-button").on("click", function () {
    sixerSong.play();
  });
  $(".pause-button").on("click", function () {
    sixerSong.pause();
  });

  for (var i = 0; i < questions.length; i++) {
    // //   for(var j = 0; j < questions[i].choices.length; j++){
    // var options = questions[i];
    // //       // options.choices.forEach(){
    questions[i].choices.forEach(function () {
      var options = $("<button>");
      options.addClass("letter-button letter letter-button-color");
      options.attr("data-letter", questions[i].choices);
      options.text(questions[i].choices);
      $("#options").append(options);
    });
    $("#questions").append(questions[i].prompt);
  }
  
$("#Start").on("click", run());
hide();
function run() {
  clearInterval(countingId);
  countingId = setInterval(decrement, 1000);
  $("#questions").style.display("");

}
function decrement() {
  count--;
  $("#time-left").html("<h1>" + count + "</h1>");
  if (count === 0) {
    sumbit();
    alert("Times up!")
  }
  function hide(){
    $("#questions").style.display("none");
  }
  

  $("#time-left").html("<h2>" + count + "</h2>");

// //$("#sumbit").on("click", sumbit)


// function checkAns(){
//   if(slectedAns == correctAns){
//     ++questionsCorr;
//     ++questionAns;
//     ++score;
//   } else if (selectedAns !== correctAns){
//     ++questionAns;
//     ++questionsWrg;
}});
