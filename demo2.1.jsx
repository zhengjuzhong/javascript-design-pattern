function Duck () {}
function Chicken () {}

const makeSound = (animal) => {
  if (animal instanceof Duck) {
    console.log('🦆 嘎嘎嘎');
  } else if (animal instanceof Chicken) {
    console.log('🍗 咯咯咯');
  }
}

makeSound(new Duck())
makeSound(new Chicken())