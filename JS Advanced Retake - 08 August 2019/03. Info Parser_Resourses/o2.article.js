class Article {
    constructor(title, creator) {
        this.title = title,
            this.creator = creator;
        this.comments = [];
        this._likes = [];
        this.idCount = 1;
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0].user} likes this article!`
        } else {
            return `${this._likes[0].user} and ${this._likes.length} others like this article!`
        }
    }
    like(username) {
        let found = this._likes.find(element => element.user === username);
        //console.log(found)
        if (username === this.creator) {
            console.log("You can't like your own articles!");
        }
        else if(found===undefined){
            let obj = {
                user: username
            }
            this._likes.push(obj);
            return `${username} liked ${this.title}!`

        }
        else {
            console.log("You can't like the same article twice!");
        }
    }
    dislike(username) {
        let found = this._likes.find(element => element.user === username);
        if (found === undefined) {
            console.log("You can't dislike this article!")
        } else {
            for (let i = 0; i < this._likes.length; i++) {
                const element = this._likes[i];
                if (element.user === username) {
                    this._likes.splice(i, 1);
                }
            }
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {
        let found = this.comments.find(element => element.id === id);
        if (id === undefined || found === undefined) {
            let obj = {
                id: this.idCount,
                username: username,
                content: content,
                Replies: []
            }
            this.comments.push(obj);
            this.idCount++;
            return `${username} commented on ${this.title}`
        }else {
            for (let i = 0; i < this.comments.length; i++) {
                const element = this.comments[i];
                if(element.id===id){
                    let lastItem=element.Replies[element.Replies.length-1];
                    console.log(lastItem)
                    
                        if(lastItem===undefined){
                            let obj1={//greshka
                                id: (element.id+0.1),
                                username: username,
                                content: content,
                                }
                                this.comments[i].Replies.push(obj1);
                        }else{
                            let id4=Number(lastItem.id)
                            let obj1={//greshka
                                id: (id4+0.1).toFixed(1),
                                username: username,
                                content: content,
                                }
                                this.comments[i].Replies.push(obj1);
                            }


                    
                }
                
            }
            
            return `You replied successfully`;
        }
    }
    toString(sortingType){
        for (const key in this.comments) {
            console.log(this.comments[key])
        }
    }

}
let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));