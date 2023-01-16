// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Paulo";
    console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Gabriel";
    console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) { 
    console.log("The driver has the longest name, it has " + hacker1.length);
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, is has " + hacker2.length + ".");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length);
}

// Iteration 3: Loops
//3.1
// console.log(hacker1.split('').join(' ').toUpperCase());

    let results = '';
for(i = 0; i < hacker1.length; i++){
  hacker1[i];
  results += hacker1[i].toUpperCase() + ' ';
  }
  console.log(results);

  //3.2 

  let navigatorReversedName = '';  
  for(i = hacker2.length - 1; i >= 0; i--){
    hacker2[i];
    navigatorReversedName += hacker2[i];
  }
  console.log(navigatorReversedName);

  //3.3

let hacker1new = '';
let hacker2new = '';

hacker1new = hacker1.toLowerCase();
hacker2new = hacker2.toLowerCase();

  if (hacker1new > hacker2new) {
    console.log("The driver\'s name goes first.");
  }
    else if (hacker1new < hacker2new) {
        console.log("Yo, the navigator goes first difinitely");
    }

    else {
        console.log("What?! You both have the same name?")
    }


// Bonus 1 :

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium magna aliquam urna interdum accumsan. Integer vel ante sit amet metus gravida tempus at eget orci. Nulla venenatis leo eget eros rutrum sagittis. Ut posuere lobortis sodales. Sed elit nisi, dictum sit amet enim et, tincidunt dictum nunc. Donec interdum massa quis tincidunt elementum. Morbi porta quam ut lectus sodales, nec convallis metus aliquet. Donec convallis, leo eget vestibulum mattis, odio nulla tempor tortor, sed condimentum augue tortor quis felis. In a ultrices nisl. In convallis libero vitae laoreet suscipit. Phasellus in eros eget nisi pretium viverra. Etiam a posuere mauris. Aenean pulvinar sollicitudin dolor. Phasellus at maximus mauris. Sed neque tellus, suscipit ac libero eget, feugiat semper orci. Morbi fringilla rutrum erat, ut lobortis ipsum euismod non. Praesent sed nunc ut est congue faucibus vitae sed turpis. Maecenas dolor libero, suscipit nec elementum non, interdum bibendum enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consectetur felis et semper ultrices. Nam maximus dui purus, nec pellentesque mi elementum ac. Etiam vel nulla et nibh rutrum pretium. Nullam dignissim mi purus, quis ultrices orci tempor commodo. Phasellus tristique augue id lacus pharetra, laoreet bibendum tellus egestas. Duis orci tortor, bibendum eget convallis vel, efficitur ut leo. Nunc suscipit erat eu ante dignissim viverra. Cras tempor et augue nec elementum. Integer sagittis augue a dui blandit venenatis at rutrum diam. Suspendisse pellentesque porta nisi eget fermentum. Donec in fringilla tellus. Aenean id cursus arcu, quis malesuada nisi. Vestibulum placerat nisl id dictum facilisis. Suspendisse ut hendrerit nulla. Nunc vitae rutrum arcu, suscipit vehicula elit. Aliquam dapibus neque tristique diam semper vulputate. Vestibulum facilisis blandit turpis, nec imperdiet dui tempor ac.'

console.log(longText.length);

let count = 0
for (let i = 0; i < longText.length; i++) {
      const char1 = longText[i];
      const char2 = longText[i + 1];
      if (char1 === "e" && char2 === "t") {
        count++;
      };
    };
console.log(count)

// Bonus 2 :

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');

}
  