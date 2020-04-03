$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      if (num.toString().includes("3")) {
        numberArray.push("Won't you be my neighbor?");
      } else if (num.toString().includes("2")) {
        numberArray.push("Boop!");
      } else if (num.toString().includes("1")) {
        numberArray.push("Beep!");
      } else {
        numberArray.push(num.toString());
      };
    };
  console.log(numberArray);

  numberArrayToString = numberArray.toString();
  AnswerSplit = numberArrayToString.split(",");
  // console.log(AnswerSplit);
  answer = AnswerSplit.join(", ");
    

  $("#output").append(answer);
  event.preventDefault();
  });
});