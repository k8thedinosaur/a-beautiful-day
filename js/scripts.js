// bs logic 

// ui logic
$(document).ready(function() {
  $("#robot-form").submit(function(event) {

  var number = parseInt($("#number-form").val());
  // console.log(number);
  
  var input = [];
  for (var num = 0; num <= number; num++) {
    if (num.toString().includes("3")) {
      input.push("Won't you be my neighbor?");
    } else if (num.toString().includes("2")) {
      input.push("Boop!");
    } else if (num.toString().includes("1")) {
      input.push("Beep!");
    } else {
      input.push(num.toString());
    };
  };
  console.log("first f: " + input);
    
  function addCommaSpace(input) {
    return input.toString().split(",").join(", ");
  };

  var answer = addCommaSpace(input);
  console.log("makeitpretty: " + answer);
    
    

  $("#output").append(answer);
  event.preventDefault();
  });
});
















