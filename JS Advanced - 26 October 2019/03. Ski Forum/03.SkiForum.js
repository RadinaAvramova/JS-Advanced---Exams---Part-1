class Forum {
    constructor() {
        this._users = []
        this._questions = [];
        this._id = 1;
    }
    register(username, password, repeatPassword, email) {

        if (!username || !password || !repeatPassword || !email) {
            throw new Error('Input can not be empty')
        }
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }
        if (this._users.find(element => element.username === username) ||
            this._users.find(element2 => element2.email === email)) {
            throw new Error("This user already exists!");
        }
        this._users.push({ username, password, email });
        return `${username} with ${email} was registered successfully!`
    }
    login(username, password) {
        let found = this._users.find(element => element.username === username);
        if (found.password === password) {
            found.isLogin = true;
            return "Hello! You have logged in successfully"
        } else {
            throw new Error("There is no such user")
        }
    }
    logout(username, password) {
        let found = this._users.find(element => element.username === username);
        if (found === undefined) {
            throw new Error("There is no such user");
        } if (found.password === password) {
            found.isLogin = false;
            return "You have logged out successfully";
        }
    }
    postQuestion(username, question) {
        let found = this._users.find(element => element.username === username&&element.isLogin);
        if (found === undefined) {
            throw new Error("You should be logged in to post questions");

        }
        if (question === "") {
            throw new Error("Invalid question");
        }
        this._questions.push({ id: this._id, username, question, answers: [] });
        this._id++;
        return "Your question has been posted successfully";
    }
    postAnswer(username, questionId, answer){
        let found = this._users.find(element => element.username === username&&element.isLogin);
        if(found===undefined){
            throw new Error("You should be logged in to post answers")
        }
        if(answer===""){
            throw new Error("Invalid answer")
        }
        let quest=this._questions.find(element => element.id === questionId)
        if(quest===undefined){
            throw new Error("There is no such question");
        }
        quest.answers.push({username,answer});
        return "Your answer has been posted successfully";
    }
    showQuestions(){
        //console.log(this._questions);
        //console.log(this._questions.answers)
        let arr=[];
        for (const key in this._questions) {
            console.log(this._questions[key])
            let str=`Question ${this._questions[key].id} by ${this._questions[key].username}: ${this._questions[key].question}`;
            arr.push(str);
            str="";
            this._questions[key].answers.forEach(element => {
                str=`---${element.username}: ${element.answer}`;
                arr.push(str);
                str="";
            });
        }
        console.log(arr.join("\n"))
    }
    // TODO: implement this class...
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());