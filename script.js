document.getElementById('generate').addEventListener('click', () => {
  let generator = {
    length: 0,
    special: undefined,
    upper: undefined,
    lower: undefined,
    number: undefined
  }

  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let special = '!@#$%^&*()_+{}[];:,<.>/?`~|';


  //              FROM HERE DOWN

  do {
    alert('Please input a number between 8-128 to choose the length of your password');
    generator.length = prompt("Enter a number to indicate the length");
  } while (generator.length < 8 || generator.length > 128);

  alert('Please Answer the following questions with a yes or no.')

  do {
    let upper = prompt("Do you want uppercase letters?");

    if (upper === 'yes') {
      generator.upper = true;
    } else if (upper === 'no') {
      generator.upper = false;
    } else if (upper === 'true' || upper === 'false') {
      generator.upper = upper;
    }

  } while (generator.upper === undefined);

  do {
    let lower = prompt("Do you want lowercase letters?");

    if (lower === 'yes') {
      generator.lower = true;
    } else if (lower === 'no') {
      generator.lower = false;
    } else if (lower === 'true' || lower === 'false') {
      generator.lower = lower;
    }

  } while (generator.lower === undefined);

  do {
    let special = prompt("Do you want special characters?");

    if (special === 'yes') {
      generator.special = true;
    } else if (special === 'no') {
      generator.special = false;
    } else if (special === 'true' || special === 'false') {
      generator.special = special;
    }

  } while (generator.special === undefined);

  do {
    let number = prompt("Do you want numbers?");

    if (number === 'yes') {
      generator.number = true;
    } else if (number === 'no') {
      generator.number = false;
    } else if (number === 'true' || number === 'false') {
      generator.number = number;
    }

  } while (generator.number === undefined);

  if (generator.lower == false && generator.upper == false && generator.special == false && generator.number == false) {
    alert('Please answer yes to at least one of the options.');
  } else {

    let list = '';

    if (generator.upper) {
      list += uppercase;
    }
    if (generator.lower) {
      list += lowercase;
    }
    if (generator.special) {
      list += special;
    }
    if (generator.number) {
      list += numbers;
    }

    let result = "";
    //  for loop to randomize password
    for (let i = 0; i < generator.length; i++) {
      let char_index = Math.floor(Math.random() * list.length);
      let char = list.substr(char_index, 1);
      result = result + char;
    }
    document.getElementById('password').textContent = result;
  }
  //display to user
})
