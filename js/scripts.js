// bs logic 
var outputArray = [];

function Robogersify(input, name) {
  for (var num = 0; num <= input; num++) {
    if (num.toString().includes("3")) {
      outputArray.push("Won't you be my neighbor, " + name + "?")
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

function reverse(input) {
  return input.reverse();
}

function addCommaSpace(input) {
  return input.toString().split(",").join(", ");
};



// ui logic
$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    var name = $("#name").val();
    var number = parseInt($("#number-form").val());
    Robogersify(number, name);
    var answer = addCommaSpace(outputArray);
    var reversedAnswer = reverse(outputArray);
    console.log(reversedAnswer);
  $("#result").show();
  $("#output").html(answer);
  event.preventDefault();
  });

  // $("#backwards").submit(function(event) {
  //   event.preventDefault();
  //   var name = $("#name").val();
  //   var number = parseInt($("#number-form").val());
  //   Robogersify(number, name);
  //   var reversedAnswer = addCommaSpace(outputArray);
  //   var reversedAnswer = reverse(outputArray);
  //   $("#result").show();
  //   $("#output").html(reversedAnswer);
  // });
});
