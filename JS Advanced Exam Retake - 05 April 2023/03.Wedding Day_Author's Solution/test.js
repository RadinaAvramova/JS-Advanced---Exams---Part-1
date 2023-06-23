let expect = require('chai').expect;
let weddingDay = require('./weddingDay');

describe("Tests for weddingDay class", function () {
    it("Functionality test for PickVenue function", () => {
        expect(() => weddingDay.pickVenue("test","test",1)).to.throw("Invalid Information!")
        expect(() => weddingDay.pickVenue(5,10)).to.throw("Invalid Information!")
        expect(() => weddingDay.pickVenue(5,10,"test")).to.throw("The location of this venue is not in the correct area!")
        expect(weddingDay.pickVenue(200,100,"Varna")).to.equal("This venue meets the requirements, with capacity of 200 guests and 100$ cover.")
        expect(weddingDay.pickVenue(150,120,"Varna")).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.")
        expect(weddingDay.pickVenue(100,150,"Varna")).to.equal("This venue does not meet your requirements!")
        expect(weddingDay.pickVenue(150,125,"Varna")).to.equal("This venue does not meet your requirements!")
    });
 
    it("Functionality test for otherSpendings function", () => {
        expect(() => weddingDay.otherSpendings(1,[],true)).to.throw("Invalid Information!")
        expect(() => weddingDay.otherSpendings([],1,true)).to.throw("Invalid Information!")
        expect(() => weddingDay.otherSpendings([],[],1)).to.throw("Invalid Information!")
        expect(weddingDay.otherSpendings(["flowers","Fabric drapes and curtains"],["pictures","video"],false)).to.equal("You spend 2900$ for wedding decoration and photography!")
        expect(weddingDay.otherSpendings(["flowers","Fabric drapes and curtains"],["pictures","video"],true)).to.equal("You spend 2465$ for wedding decoration and photography with 15% discount!")
    });
 
    it("Functionality test for tableDistribution function", () => {
        expect(() => weddingDay.tableDistribution("test",1)).to.throw("Invalid Information!")
        expect(() => weddingDay.tableDistribution(1,"test")).to.throw("Invalid Information!")
        expect(() => weddingDay.tableDistribution(-3,1)).to.throw("Invalid Information!")
        expect(() => weddingDay.tableDistribution(1,-3)).to.throw("Invalid Information!")
       expect(weddingDay.tableDistribution(10,3)).to.equal("There is only 3 people on every table, you can join some tables.")
       expect(weddingDay.tableDistribution(22,3)).to.equal("You have 3 tables with 7 guests on table.")
    });
 
});