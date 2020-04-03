$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      numberArray.push(num);
    };
    console.log(numberArray, "numberArray");

    numberArrayToString = numberArray.toString();
    
    if (numberArrayToString.includes("3")) {
      var noThrees = numberArrayToString.replace("3", "Won't you be my neighbor?");
    };
    
    if (noThrees.includes("2")) {
      var noTwos = noThrees.replace("2", "Boop!");
    }

    if (noTwos.includes("1")) {
      // console.log("contains 1")
      var noOnes = noTwos.replace("1", "Beep!");
      // console.log(noOnes);
    };
    
    // numberArraySplit = numberArrayToString.split(",");
    // console.log(typeof numberArraySplit, " typeof numberArraySplit");
    // console.log(numberArraySplit, "numberArraySplit");
    

    // numberArrayJoined = numberArraySplit.join(", ");
    

    $("#output").append(noOnes);
    event.preventDefault();
  })
})