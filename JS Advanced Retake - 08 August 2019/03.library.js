class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: 0,
            special: 0,
            vip: 0,
        };
    }
    subscribe(name, type) {
        let obj = {
            name: name,
            type: type,
            books: []
        }
        let found = this.subscribers.find(element => element.name === name);
        if (type !== "normal" && type !== "special" && type !== "vip") {
            console.log(`The type ${type} is invalid`);
        } else {
            if (found !== undefined) {
                let curentType = found.type;
                //this.subscriptionTypes[curentType]--;
                found.type = type;
               // this.subscriptionTypes[type]++;
            } else {
                //this.subscriptionTypes[type]++;
                this.subscribers.push(obj);
                //console.log(this.subscribers)
                //console.log(this.subscriptionTypes)
            }
        }
       //console console.log(this.subscribers)
        //console.log(this.subscriptionTypes)
        return obj;
    }
    unsubscribe(name) {
        let found = this.subscribers.find(element => element.name === name);
        if (found == undefined) {
            console.log(`There is no such subscriber as ${name}`);
        }
        else {
            for (let i = 0; i < this.subscribers.length; i++) {
                const element = this.subscribers[i];
                if (element.name === name) {
                    this.subscribers.splice(i, 1);
                    break;
                }

            }
        }
        return this.subscribers;
    }
    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let found = this.subscribers.find(element => element.name === subscriberName);
        if (found == undefined) {
            console.log(`There is no such subscriber as ${subscriberName}`);
        }
        else {
            for (let i = 0; i < this.subscribers.length; i++) {
                const element = this.subscribers[i];
                if (element.name === subscriberName) {
                    if (element.type === "normal") {
                        if (this.subscribers[i].books.length < this.libraryName.length) {
                            let string1 = bookTitle + " by " + bookAuthor;
                            this.subscribers[i].books.push(string1);
                        }else{console.log(`You have reached your subscription limit ${subTypeLimit}!`)}
                    } else if (element.type === "special") {
                        if (this.subscribers[i].books.length < this.libraryName.length * 2) {
                            let string1 = bookTitle + " by " + bookAuthor;
                            this.subscribers[i].books.push(string1);
                        }else{console.log(`You have reached your subscription limit ${subTypeLimit}!`)}
                    } else {
                        let string1 = bookTitle + " by " + bookAuthor;
                        this.subscribers[i].books.push(string1);
                    }
                }




            }
        }
return found;
    }
    showInfo (){
        let string2="";
        for (const key in this.subscribers) {
            string2+=`Subscriber: ${this.subscribers[key].name}, Type: ${this.subscribers[key].type}\nReceived books:`;
            for (let i = 0; i < this.subscribers[key].books.length; i++) {
                const element = this.subscribers[key].books[i];
                let splited=element.split(" by ");

                let title=splited[0];
                let author=splited[1];
                //console.log(title)
                //console.log(author)
                if(i+1==this.subscribers[key].books.length){
                    string2+=` ${title} by ${author}\n`
                }else{string2+=` ${title} by ${author}`}
                
            }
            //string2+=` Received books: ${this.subscribers[key].books.join(", ")}\n`
        }
        return string2;
    }



}
let lib = new Library('Lib');
console.log( lib.subscribe('Peter', 'normal'))
console.log( lib.subscribe('John', 'special'))
console.log(lib.subscribe('Josh','vip'))
lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh','Cromwell','Victor Hugo');
lib.receiveBook('Josh','Marie Tudor','Victor Hugo');
lib.receiveBook('Josh','Bug-Jargal','Victor Hugo');
lib.receiveBook('Josh','Les Orientales','Victor Hugo');
lib.receiveBook('Josh','Marion de Lorme','Victor Hugo');
console.log(lib.showInfo())