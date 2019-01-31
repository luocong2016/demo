/*
  static
  
  private
  protected
  public
*/

class Person {
  static person: string = 'person'

  static getStaticVal(): object {
    return {
      person: Person.person
    }
  }

  constructor(public name: string) {}

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  toString(): void {
    console.log(`
      Person {
        name: ${this.name}
      }
    `)
  }

  private run(): void {
    console.log(`run name ${this.name}`)
  }

  protected self(): void {
    console.log(`Person ${Person.person}`)
  }
}

class Bukn extends Person {
  constructor(name: string) {
    super(name)
  }

  toString(): void {
    console.log(`
      Bukn {
        name: ${this.name}
      }
    `)
  }
}

const p: Person = new Person('person')
const b: Bukn = new Bukn('bukn')

// 多态
abstract class Animals {
  abstract eat(): any

  constructor(public name: string){}
  
  setName(name: string): void {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}

class Dog extends Animals {
  constructor(name: string) {
    super(name)
  }

  eat(): string {
    return `骨头`
  }
}

class Cat extends Animals {
  constructor(name: string) {
    super(name)
  }

  eat(): string {
    return `鱼`
  }
}

const dog: Dog = new Dog('dog')
const cat: Cat = new Cat('cat')

console.log(dog, cat)
