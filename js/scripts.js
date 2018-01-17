//factorial functions
function factorial(max) {
  var total = 1;
  for (var i = 1; i <= max; i++) {
    total = total * i;
  }
  return total;
}

function rFactorial(max) {
  if (max === 1) {
    return 1;
  }
  return max * rFactorial(max - 1);
}

function wordCheck(word) {
  word = word.toLowerCase().replace(/ /g, "").replace(/[\W]/g, "");
  console.log(word);
  for (var i = 0; i < word.length/2; i++) {
    if (word.charAt(i) !== word.charAt(word.length-(i+1))) {
      return false;
    }
  } return true;
}

function primes(max) {
  var numbers = [];
  for (var i = 2; i <= max; i++) {
    numbers.push(i);
  }

  for (var i = 2; i < numbers.length; i++) {
    numbers = numbers.filter(function(number) {
      return number % i !== 0 || number === i;
    });
  }
  return numbers;
}


$(document).ready(function() {
  $("#factorial").click(function() {
    var max = parseInt(prompt("How high should we go?"));
    alert(rFactorial(max));
  });

  $("#palindromes").click(function() {
    var word = prompt("Enter a palindrome");
    if (wordCheck(word) === true) {
      alert("nice palindrome, jerk");
    } else {
      alert("try again");
    }
  });

  $("#prime").click(function() {
    var max = parseInt(prompt("Enter a number..."));
    alert(primes(max));
  });

});
