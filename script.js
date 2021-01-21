var firstNumber = '';
var secondNumber = '';
var operator = '';
var postOp = false;
var result = 0;

var calc = {
    //Don't forget to parseInt beforehand
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
  };

$( document ).ready(function(){
    $('.btn').on('click', function() { 
        var click = $(this).val();
        if ($(this).hasClass('number')) {
            if (!postOp){
                firstNumber += click;
                console.log(firstNumber);
            }
            else {
                secondNumber += click;
                console.log(secondNumber);
            }
        }
        else if ($(this).hasClass('operator')) {
            operator = click;
            postOp = true;
        }
        else if ($(this).hasClass('equal')) {
            var first = parseInt(firstNumber);
            var second = parseInt(secondNumber);
            if (operator === 'plus') {
                result = calc.plus(first, second);
            } else if (operator === 'minus') {
                result = calc.minus(first, second);
            } else if (operator === 'times') {
                result = calc.times(first, second);
            } else if (operator === 'divide') {
                result = calc.divide(first, second);
            } else if (operator === 'power') {
                result = calc.power(first, second);
            }
            $("#result").text(result);
        }
        else {
            //clear thing
        }
    })
});