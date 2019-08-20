$(document).ready(function(){
  var total = 0;
  for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
    total += currentNumber;
  }
  alert("Total is: " + total);
});
