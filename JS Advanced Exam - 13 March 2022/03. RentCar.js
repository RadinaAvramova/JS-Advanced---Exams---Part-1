const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}


const { expect } = require('chai');
const rentCar = require('./rentCar');
 
console.log(rentCar);

describe('Tests', function () {
    describe('searchCar', () => {
        it('finds one car', () => {
            const shop = ['a', 'b', 'c'];
            const model = 'a';
 
            const result = rentCar.searchCar(shop, model);
 
            expect(result).to.equal('There is 1 car of model a in the catalog');
        });
 
        it('finds two cars', () => {
            const shop = ['a', 'b', 'a'];
            const model = 'a';
 
            const result = rentCar.searchCar(shop, model);
 
            expect(result).to.equal('There are 2 cars of model a in the catalog.');
        });
 
        it('invalid shop (number)', () => {
            expect(() => {
                rentCar.searchCar(1, 'a');
            }).to.throw();
        });
 
        it('invalid shop (string)', () => {
            expect(() => {
                rentCar.searchCar('abc', 'a');
            }).to.throw();
        });
 
        it('invalid model', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', '1'], 1);
            }).to.throw();
        });
 
        it('car not found', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 'd');
            }).to.throw();
        })
    });
 
    describe('calculatePriceOfCar', () => {
        it('invalid model', () => {
            expect(() => {
                rentCar.calculatePriceOfCar(1, 1);
            }).to.throw();
        });
 
        it('invalid days', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Volkswagen', '1');
            }).to.throw();
        });
 
        it('correct price for model', () => {
            const result = rentCar.calculatePriceOfCar('Volkswagen', 2);
            expect(result).to.equal('You choose Volkswagen and it will cost $40!');
        });
 
        it('model not found', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('a', 1);
            }).to.throw();
        });
    });
 
    describe('check budged', () => {
        it('invalid cost per day', () => {
            expect(() => {
                rentCar.checkBudget('1', 1, 1);
            }).to.throw();
        });
 
        it('invalid days', () => {
            expect(() => {
                rentCar.checkBudget(1,'1',1);
            }).to.throw();
        });
 
        it('invalid budged', () =>{
            expect(() => {
                rentCar.checkBudget(1,1,'1');
            }).to.throw();
        });
 
        it('can afford', () => {
            const result = rentCar.checkBudget(1,1,1);
            expect(result).to.equal('You rent a car');
        });
 
        it('can afford (2)', () => {
            const result = rentCar.checkBudget(1,1,10);
            expect(result).to.equal('You rent a car');
        });
 
        it('cannot afford', () => {
            const result = rentCar.checkBudget(1,2,1);
            expect(result).to.equal('You need a bigger budged!');
        })
    })
})
