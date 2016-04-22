// Scripts for Hunger Games Trivia

$(document).ready(function() {

  var playerName = '';
  var answer1 = 'girl on fire'

  // Hide on load
  $('#question1').hide();

  // User can start typing name immediately
  $('#player-name-btn').focus();

  $('#player-name-btn').on('click', function(e) {
    e.preventDefault(); 
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#name-screen').fadeOut(500);
    $('#question1').fadeIn(500);
  })

  // Question 1
  $('#player-answer-1').on('click', function(e) {
    e.preventDefault();
    PlayerAnswer1 = $('#question1-input').val().trim();
    console.log(PlayerAnswer1);
    answerCheck1();
  });

  function answerCheck1() {
    if(PlayerAnswer1 === answer1) {
      console.log('Player got question 1 right!');
      
    }
    else {
      console.log("Player got question 1 wrong");
    };
  };



})