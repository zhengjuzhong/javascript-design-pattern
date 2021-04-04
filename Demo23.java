private class Duck {
    public void makeSound() {
        System.out.println("🦆🦆 嘎嘎嘎");
    }
}

private class Chicken {
    public void makeSound() {
        System.out.println("🦆🦆 嘎嘎嘎");
    }
}

private class AnimalSound {
    public void makeSound (Duck duck) {
        duck.makeSound();
    }
}

public class Demo23 {
    public static void main(String[] args) {
        AnimalSound animalSound = new AnimalSound();
        Duck duck = new Duck();
        Chicken chicken = new Chicken();
        animalSound.makeSound(duck);
        animalSound.makeSound(chicken);
    }
}