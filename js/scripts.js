$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      if (num.toString().includes("3")) {
        num.replace("Won't you be my neighbor?");
        numberArray.push(num);
      } else if (num.toString().includes("2")) {
        num.replace("Boop!");
        numberArray.push(num);
      } else if (num.toString().includes("1")) {
        num.replace("Beep!");
        numberArray.push(num);
      };
    };

    // console.log(numberArray, "numberArray");

    // numberArrayToString = numberArray.toString();

    // for (i in numberArrayToString) {

    //   };
    // };
    
    // AnswerSplit = noOnes.split(",");
    // answer = AnswerSplit.join(", ");
    

  $("#output").append(answer);
  event.preventDefault();
  });
});