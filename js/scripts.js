//factorial functions
function factorial(max) {
  var total = 1;
  for (var i = 1; i <= max; i++) {
    total = total * i;
  }
  return total;
}

function rFactorial(max) {
  if (isNaN(max)) {
    return "You should learn what a number is..."
  }
  if (max === 1) {
    return 1;
  }
  return max * rFactorial(max - 1);
}

//palindrome functions
function wordCheck(word) {
  word = word.toLowerCase().replace(/[\W ]/g, "");

  for (var i = 0; i < word.length/2; i++) {
    if (word.charAt(i) !== word.charAt(word.length-(i+1))) {
      return "try again";
    }
  }
  return "nice palindrome, jerk";
}

//prime number functions
function primes(max) {
  if (isNaN(max)) {
    return "You should learn what a number is..."
  }
  var numbers = [];
  for (var i = 2; i <= max; i++) {
    numbers.push(i);
  }

  for (var i = 2; i < numbers.length; i++) {
    numbers = numbers.filter(function(number) {
      return number % i !== 0 || number === i;
    });
  }
  return numbers.join(", ");
}

$(document).ready(function() {

  var mode = ""

  $(".form").submit(function(event) {
    event.preventDefault();
    var output;

    if (mode === "factorial") {
      output = rFactorial(parseInt($("#input-num").val()));
    } else if (mode === "palindrome") {
      output = wordCheck($("#input-num").val());
    } else if (mode === "prime" ){
      output = primes(parseInt($("#input-num").val()));
    }
    $("#output").hide();
    $("#output").text("Your results are: " + output);
    $("#output").fadeIn();
  });



  var m = ["factorial", "palindrome", "prime"]
  m.forEach(function(m) {
    $("#" + m).click(function() {
      $(".form").show();
      $("#input-num").val('');
      $("label").hide();
      $("#output").hide();
      $("." + m).fadeIn();
      mode = m;
    });
  });
});
