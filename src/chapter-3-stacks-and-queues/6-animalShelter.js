const Queue = require('../data-structures/queue-with-linked-list');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.id = 0;
  }

  static create() {
    return new AnimalShelter();
  }

  isEmpty() {
    return this.dogs.length() + this.cats.length() === 0;
  }

  enqueue(animal) {
    if (animal.type !== 'cat' && animal.type !== 'dog') {
      throw new Error('this shelter only accepts cats and dogs');
    }
    const animalToPush = {
      id: this.id,
      type: animal.type,
      name: animal.name,
    };
    if (animalToPush.type === 'dog') {
      this.dogs.enqueue(animalToPush);
    } else {
      this.cats.enqueue(animalToPush);
    }
    this.id += 1;
  }

  dequeueAny() {
    if (this.isEmpty()) {
      return null;
    }
    const catOrder = this.cats.peek().id;
    const dogOrder = this.dogs.peek().id;

    if (catOrder < dogOrder) {
      return this.cats.dequeue();
    }
    return this.dogs.dequeue();
  }

  dequeueCat() {
    if (this.cats.isEmpty()) {
      return null;
    }
    return this.cats.dequeue();
  }

  dequeueDog() {
    if (this.dogs.isEmpty()) {
      return null;
    }
    return this.dogs.dequeue();
  }
}

module.exports = { AnimalShelter };
