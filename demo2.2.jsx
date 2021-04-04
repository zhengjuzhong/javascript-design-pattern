const duck = {
  duckSinging() {
    console.log('嘎嘎嘎');
  }
}
const chicken = {
  duckSinging() {
    console.log('嘎嘎嘎');
  }
}
const choir = []
const joinChoir = (animal) => {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('恭喜加入合唱团 🎉🎉🎉');
    console.log('合唱团已有成员数量🔢 ' + choir.length);
  }
}
joinChoir(duck)
joinChoir(chicken)
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
const makeSound = (animal) => {
  animal.sound()
}
function Duck () {}
Duck.prototype.sound = () => {
  console.log('🦆 嘎嘎嘎');
}
function Chicken () {}
Chicken.prototype.sound = () => {
  console.log('🍗 咯咯咯');
}
makeSound(new Duck())
makeSound(new Chicken())