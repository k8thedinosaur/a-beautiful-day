$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      if (num.includes(3)) {
        num.replace(3, "Won't you be my neighbor?");
      } else if (num.includes(2)) {
        num.replace(2, "Boop!");
      }else if (noTwos.includes(1)) {
        num.replace(1, "Beep!");
      numberArray.push();
    };
    // console.log(numberArray, "numberArray");

    numberArrayToString = numberArray.toString();

    for (i in numberArrayToString) {

      };
    };
    
    AnswerSplit = noOnes.split(",");
    answer = AnswerSplit.join(", ");
    

    $("#output").append(answer);
    event.preventDefault();
  })
})