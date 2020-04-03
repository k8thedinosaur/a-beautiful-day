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
    
    if (numberArrayToString.includes("1")) {
      console.log("contains 1")
      var noOnes = numberArrayToString.replace("1", "Beep!");
      console.log(noOnes);
    };
    
    numberArraySplit = numberArrayToString.split(",");
    // console.log(typeof numberArraySplit, " typeof numberArraySplit");
    // console.log(numberArraySplit, "numberArraySplit");
    

    numberArrayJoined = numberArraySplit.join(", ");
    

    $("#output").append(noOnes);
    event.preventDefault();
  })
})