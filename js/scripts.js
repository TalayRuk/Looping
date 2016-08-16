var countTo = function(num1, num2) {
  var result = [];
  for(var n = num2; n <= num1; n += num2) {
    result.push(n);
  }
  return result;
}



$(document).ready(function() {

  $(".inputNumberAdd .btn").click(function() {

    var number1 = parseInt($("input#n1").val());
    var number2 = parseInt($("input#n2").val());
    console.log(number1, number2);
    if (number1 > number2) {
      var output = countTo(number1, number2);
      for (var i = 0; i < output.length; i++) {
        $(".final").append("<li>" + output[i] + "</li>");
      }
    } else {
      $(".final").append("Your numbers are backwards!");
    }
  });

// the other way to do it. I can also put function below
// after else { instead of append(your numbers are backwards!")
// This way it doesn't matter where the user enter the greater
// number .. the function still works if user enter n1 less value
// than n2****
//   var output = countTo(number2, number1);
//   for (var i = 0; i < output.length; i++) {
//     $(".final").append("<li>" + output[i] + "</li>");
//   }

});
