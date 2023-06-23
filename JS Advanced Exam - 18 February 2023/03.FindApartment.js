let expect = require('chai').expect;
let findNewApartment = require('./findApartment');


describe('apartment tests', () => {
    it('isGoodLocation', () => {
        expect(() => { findNewApartment.isGoodLocation('Sofia', 1 ) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw("Invalid input!");
        expect(findNewApartment.isGoodLocation('Pernik', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");      
    });

    it('isLargeEnough', () => {
        expect(() => { findNewApartment.isLargeEnough(50, 40) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isLargeEnough([], 40) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isLargeEnough([], 40), "" }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isLargeEnough([40], '40') }).to.throw("Invalid input!");
        expect(findNewApartment.isLargeEnough([40,50,60,120], 55)).to.equal('60, 120');
        expect(findNewApartment.isLargeEnough([40,50,40,20], 55)).to.equal('');
        expect(findNewApartment.isLargeEnough([40,55,40,20], 55)).to.equal('55');
    });

    it('isItAffordable', () => {
        expect(() => { findNewApartment.isItAffordable('50000', '50000') }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable(50000, '50000') }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable('50000', 50000) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable(0, 50000) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable(50000, 0) }).to.throw("Invalid input!");
        expect(findNewApartment.isItAffordable(55000, 50000)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(50000, 55000)).to.equal("You can afford this home!");
      
    });

   
 });


 const findNewApartment = {
    isGoodLocation(city, nearPublicTransportation) {
      if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean"){
          throw new Error("Invalid input!");
      }
      if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
          return "This location is not suitable for you.";
      }else {
          if (nearPublicTransportation == true) {
              return "You can go on home tour!";
          }
          else {
              return "There is no public transport in area.";
          }
      }
    },
    isLargeEnough(apartments, minimalSquareMeters) {
      let resultArr = [];
      if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
        throw new Error("Invalid input!");
      }
      apartments.map((apartment) => {
        if (apartment >= minimalSquareMeters) {
          resultArr.push(apartment);
        }
      });
      return resultArr.join(', ');
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number"
       || price <= 0 || budget <= 0) {
        throw new Error("Invalid input!");
      }
      let result = budget - price;
      if (result < 0) {
        return "You don't have enough money for this house!";
      } else {
        return "You can afford this home!";
      }
    },
  };
  
  
  module.exports = findNewApartment;