/**
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.
 */


const keyMap = {
  "a": "beef",
  "e": "beef",
  "i": "beef",
  "o": "beef",
  "u": "beef",
  "t": "tomato",
  "l": "lettuce",
  "c": "cheese",
  "g": "guacamole",
  "s": "salsa"
}
function tacofy(letters) {
  let recipe = [];

  recipe.push("shell");

  // create array from word
  [...letters].forEach(letter => {
    console.log(letter.toLowerCase())

    if (Object.keys(keyMap).includes(letter.toLowerCase())) {
      recipe.push(keyMap[letter.toLowerCase()]);
    }

  })

  recipe.push("shell");

  return recipe;
}


console.log(tacofy("kVHQEwSE"));