const isEvenOrOdd = x => x%2 === 0 ? 'es par' : 'es impar'

function average(array) {
    var sum = 0
    for (i = 0; array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

var array = [1,2,3,4]
console.log(average(array))

const average = array => {
    const sum = 0
    for (let i = 0; array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

//////////////////////////////////////////////////////////////////////////////////////
function sumaString(num) {
    var a = num.toString();
    var array = a.split('');

    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }

    return sum;
}
const sumaString = num => num.toString().split('').reduce( (num1, num2) => parseInt(num1) + parseInt(num2), 0)

function sumaMath(num) {
    var sum = 0
    while(num) {
        sum += num % 10
        num = Math.trunc(num / 10)
    }
    return sum
}
function sumaMath(num) {
    var sum = 0
    for (i=0; num.toString().length; i++) {
        sum += num % 10
        num = Math.trunc(num / 10)
    }
    return sum
}
function sumaMath(num) {var sum = 0;while(num) {sum += num % 10;num = Math.trunc(num / 10);}return sum;}
function sumaMath(num) {var sum = 0;for (i=0; num.toString().length; i++) {sum += num % 10;num = Math.trunc(num / 10);}return sum;}
