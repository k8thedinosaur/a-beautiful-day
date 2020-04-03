$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      numberArray.push(num);
    }

    numberArrayToString = numberArray.toString();
    numberArraySplit = numberArrayToString.split(",");
    numberArrayJoined = numberArraySplit.join(", ");
    
    console.log(numberArray);
    console.log(numberArrayToString);

    $("#output").append(numberArrayJoined);
    event.preventDefault();
  })
})