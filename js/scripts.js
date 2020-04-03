$(document).ready(function() {
  $("#robot-form").submit(function(event) {

    var number = parseInt($("#number-form").val());
    console.log(number);

    $("#output").append(number);
    event.preventDefault();
  })
})