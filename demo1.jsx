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
