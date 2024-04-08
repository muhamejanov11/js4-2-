let randomNumber = Math.round(Math.random() * 500)
console.log(randomNumber);


if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log('FizzBuzz');
}

else if (randomNumber % 3 === 0) {
    console.log('Fizz');
}

else if (randomNumber % 5 === 0) {
    console.log('Buzz');
}

else {
    console.log('Вообще не делится');
}