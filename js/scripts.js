$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    // console.log(number);

    var numberArray = [];
    for (var num = 0; num <= number; num++) {
      numberArray.push(num);
    }
    
    console.log(numberArray);

    $("#output").append(numberArray);
    event.preventDefault();
  })
})