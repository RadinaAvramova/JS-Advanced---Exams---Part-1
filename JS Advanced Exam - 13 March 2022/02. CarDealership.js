class CarDealership {
    constructor(name) {
        this.name = name,
            this.totalIncome = 0,
            this.availableCars = [],
            this.soldCars = []
    }

    addCar(model, horsepower, price, mileage) {

        if(model === '' ||
        typeof model !== 'string' ||
        horsepower < 0 ||
        typeof price !== 'number' ||
        typeof mileage !== 'number') {
            throw new Error(`Invalid input!`)
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;

    }

    sellCar (model, desiredMileage) {

        let currentCar = this.availableCars.find(p => p.model === model);
        let findIndexCurrentCar = this.availableCars.findIndex(p => p.model === model)

        if(!currentCar) {
            throw new Error(`${model} was not found!`)
        }
        let difference = currentCar.mileage - desiredMileage;
        if(difference <= 0) {
            currentCar.price = currentCar.price
        } else if(difference <= 40000) {
            currentCar.price *= 0.95;
        } else if(difference > 40000) {
            currentCar.price *= 0.9;
        }

        this.soldCars.push({
            model: currentCar.model,
            horsepower: currentCar.horsepower,
            soldPrice: currentCar.price
        })
        this.availableCars.splice(findIndexCurrentCar, 1);
        this.totalIncome += currentCar.price;
        return `${currentCar.model} was sold for ${currentCar.price.toFixed(2)}$`
    }

    currentCar () {

        if(this.availableCars.length === 0) {
            return `There are no available cars`
        };

        const result = [
            '-Available cars:'
        ];
        this.availableCars.forEach((p) => result.push(`---${p.model} - ${p.horsepower} HP - ${p.mileage.toFixed(2)} km - ${p.price.toFixed(2)}$`))
        return result.join('\n')
    }

    salesReport (criteria) {

        if(criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error(`Invalid criteria!`)
        };

        if(criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        };

        if(criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        };

        const result = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`
        ];
        this.soldCars.forEach((p) => result.push(`---${p.model} - ${p.horsepower} HP - ${p.soldPrice.toFixed(2)}$`))
        return result.join(`\n`)
    }

}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$

// let dealership = new CarDealership('SoftAuto');

// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
