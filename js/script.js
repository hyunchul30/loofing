// first function
$(document).ready(function(){
// second function which is also an "event" handler function for the submit 'event' from the button on index.html
  $("#button").submit(function(event){
    event.preventDefault();
    let outputs;
    let firstNumber = parseInt($("#first-number").val()); //limit a.k.a. 'count to'
    let secondNumber = parseInt($("#second-number").val()); // n (number to count by upto 1st#)
    console.log("Submit button Event functio: first, second", firstNumber, secondNumber);
    let i = secondNumber-1; //n-1 to get to zero iterations in the for loop

    // for(let n=secondNumber; ((n+i)<=firstNumber)
    // if (firstNumber > secondNumber){  //1st#:30; 2nd#:5; outputs[i]:
    //   for (var i = 1; i <= firstNumber; i += 1) {
    //   total += i;
    // }
    // if (this == null) {
    //   throw new TypeError('this is null or not defined');
    // }

    });
    console.log("outer fxn");
    alert("Output is: " + outputs);
});
