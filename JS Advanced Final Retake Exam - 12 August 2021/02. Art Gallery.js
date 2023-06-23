class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 },
            this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        /* let isInTheArr = false;

        if(!this.possibleArticles[articleModel]) {
            throw new Error(`This article model is not included in this gallery!`);
        }

        for(const el of this.listOfArticles) {
            if(el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInTheArr = true;
            }
        }

        if(!isInTheArr) {
            this.listOfArticles.push({articleModel, articleName, quantity})
        } */
        this.listOfArticles.push({
            articleModel,
            articleName,
            quantity
        })

        if (!this.possibleArticles[articleModel]) {
            return `This article model is not included in this gallery!`;
        }

        let currentArticle = this.listOfArticles.find(pr => pr.listOfArticles === articleModel);
        if (!currentArticle) {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            });
            quantity = Number(quantity);
        } else {
            articleModel.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };

    inviteGuest(guestName, personality) {

        /* let points = 0;

        let currentGuest = this.guests.find(g => g.guestName === guestName);

        if (currentGuest) {
            throw new Error`${guestName} has already been invited.` // or return ??
        }
        else {
            if (personality === 'Vip') {
                points = 500;
            } else if (personality === 'Middle') {
                points = 250;
            } else {
                points = 50;
            }
            this.guests.push({
                guestName: guestName,
                points: points,
                purchaseArticle: 0
            })
        }

        return `You have successfully invited ${guestName}!`


 */

        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let obj = { guestName, points: 0, purchaseArticle: 0 }

        switch (personality) {
            case "Vip": obj.points = 500; break;
            case "Middle": obj.points = 250; break;
            default: obj.points = 50; break;
        }
        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        articleModel = articleModel.toLowerCase();

        let currentModel = this.listOfArticles.find(p => p.articleName === articleName);
        let currentGuest = this.guests.find(p => p.guestName === guestName);

        if (!currentModel || currentModel.articleModel !== articleModel) {
            throw new Error(`This article is not found.`)
        }
        if (currentModel.quantity === 0) {
            throw new Error(`The ${articleName} is not available.`);
        }
        if (!currentGuest) {
            throw new Error(`This guest is not invited.`);
        }

        if (currentGuest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        }

        currentGuest.points -= this.possibleArticles[articleModel];
        currentGuest.purchaseArticle++;
        currentModel.quantity--;


        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        /* let article;
        let guest;

        let isArticleInTheArr = false;

        for (let el of this.listOfArticles) {
            if (el.articleName !== articleName || el.articleModel !== articleModel) {
                isArticleInTheArr = false
            } else {
                article = el;
                isArticleInTheArr = true;
                break;
            }
        }
        if (!isArticleInTheArr) {
            throw new Error(`This article is not found.`)
        }
        if (article.quantity === 0) {
            throw new Error(`The ${articleName} is not available.`);
        }

        if (guest[points] < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        } else {
            this.guest.points -= this.possibleArticles[articleModel];
            this.guest.purchaseArticle++;
            article.quantity--;
        } */

    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// John successfully purchased the article worth 200 points.
// Peter successfully purchased the article worth 250 points.
// This article is not found.



// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Successfully added article Mona Liza with a new quantity- 3.
// Successfully added article Ancient vase with a new quantity- 2.
// Successfully added article Mona Liza with a new quantity- 1.
