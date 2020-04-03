// bs logic 
var outputArray = [];

function Robogersify(input) {
  for (var num = 0; num <= input; num++) {
    if (num.toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?");
    } else if (num.toString().includes("2")) {
      outputArray.push("Boop!");
    } else if (num.toString().includes("1")) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(num.toString());
    };
  };
  return outputArray;
};


function addCommaSpace(input) {
  return input.toString().split(",").join(", ");
};


// ui logic
$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    var number = parseInt($("#number-form").val());
    Robogersify(number);
    var answer = addCommaSpace(outputArray);
  $("#output").append(answer);
  event.preventDefault();
  });
});
















