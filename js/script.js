// first function
$(document).ready(function(){
// second function which is also an "event" handler function for the submit 'event' from the button on index.html
  $("form").submit(function(event){

    let firstNumber = parseInt($("#first-number").val()); //limit a.k.a. 'count to'
    let secondNumber = parseInt($("#second-number").val()); // n (number to count by upto 1st#)

    console.log("Submit button Event functio: first, second", firstNumber, secondNumber);
    let output;
    // console.log("2".charCodeAt(0), "value of 2");
    // console.log("12".charCodeAt(0), "value of 12");

    // let i = secondNumber-1; //n-1 to get to zero iterations in the for loop

    //for(let n=secondNumber; ((n+i)<=firstNumber)

//    if (firstNumber > secondNumber){  //1st#:30; 2nd#:5; outputs[i]:

    for (let i = secondNumber; i <= firstNumber; i += secondNumber) {
    //    return output += "The number is " + i + "<br>";
    // }
    // for(let index = "2"; index <= "42"; index+="2"){
      console.log(i);
    };
    // if (this == null) {
    //   throw new TypeError('this is null or not defined');
    // }
    event.preventDefault();
    });
    // console.log("outer fxn");
    // document.getElementById("outputs").innerHTML = output;
    // output = $("#output").show();
});
