const throwErrorException = () => {
  let message;
  let number = prompt("Enter a number: ");

  try {
    if (number == '') throw "Empty field.";
    if (isNaN(number)) throw "Not a number.";

    number = Number(number);

    if (number < 5) throw "Number is too low.";
    if (number > 10) throw "Number is too high.";
  } catch (error) {
    console.log(error);
  }
}
console.log("Hello, world!");
throwErrorException();

// window.prompt("Please enter a number: ");