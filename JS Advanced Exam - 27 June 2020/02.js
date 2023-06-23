function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(comment) {
            const found = this.comments.find(element => element === comment);
            if (found === undefined) {
                this.comments.push(comment)
                return "Comment is added.";
            } else {
                throw new Error("This comment is already added!");
            }
        }
        feed() {
            return `${this.name} is fed`;
        }
        toString() {
            let arr=[];
            arr.push(`Here is ${this.owner}'s pet ${this.name}.`);
            if(this.comments.length>0){
                
                let a=[];
                 for (let i = 0; i < this.comments.length; i++) {
                     const element = this.comments[i];
                     a.push(element)
                 }
                 arr.push(`Special requirements: ${a.join(", ")}`);
            }
            return arr.join("\n");
        }
    }
    class Cat extends Pet{
        constructor( owner, name, insideHabits, scratching ){
            super(owner,name)
            this.insideHabits=insideHabits;
            this.scratching=scratching;
        }
        feed(){
            return super.feed()+", happy and purring.";
        }
        toString(){
            if(this.scratching===true){
                return super.toString()+
                `\nMain information:\n${ this.name } is a cat with ${this.insideHabits}, but beware of scratches.`
            }else{
                return super.toString()+
                `\nMain information:\n${ this.name } is a cat with ${this.insideHabits}`
            }
        }
    }
    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds=runningNeeds;
            this.trainability=trainability;
        }
        feed(){
            return super.feed()+", happy and wagging tail.";
        }
        toString(){
           return super.toString()+`\nMain information:\n${ this.name } is a dog with need of ${ this.runningNeeds }km running every day and ${ this.trainability } trainability.` 
        }
    }
    return { Pet, Cat, Dog }
}
let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');        
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());