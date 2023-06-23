class WineSelection {
    constructor(space) {
        this.space = space;
        this.bill = 0;
        this.wines = [];
    }

    reserveABottle(wineName, wineType, price) {

        if (typeof wineName !== 'string' || typeof wineType !== 'string' || typeof price !== 'number') {
            return;
        }

        if (this.wines.length >= this.space) {
            throw new TypeError(`Not enough space in the cellar.`)
        } else {
            this.wines.push({
                wineName,
                wineType,
                price: Number(price),
                paid: false
            })
        }

        return `You reserved a bottle of ${wineName} ${wineType} wine.`

    }

    payWineBottle(wineName, price) {

        if (typeof wineName !== 'string' || typeof price !== 'number') {
            return;
        }

        const currentWine = this.wines.find(p => p.wineName === wineName);

        if (currentWine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (currentWine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        }

        currentWine.paid = true;
        this.bill = price;

        return `You bought a ${wineName} for a ${price}$.`

    }

    openBottle(wineName) {

        const currentWine = this.wines.find(p => p.wineName === wineName);

        if (!currentWine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (!currentWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        let index = this.wines.findIndex(p => p.wineName === wineName);
        this.wines.splice(index, 1);
        this.wines
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {

        const result = [];

        if (wineType === undefined) {
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`); // Nov red ??
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach((wine) => result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`));
            return result.join('\n');
        }

        const findWineType = this.wine.filter((wine) => wine.wineType === wineType);
        if (findWineType.length > 0) {
            findWineType.forEach((wine) => 
            result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`))
        } else {
            throw new Error(`There is no ${wineType} in the cellar.`)
        }
        return result.join('\n');
    }

}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// You bought a Sauvignon Blanc Marlborough for a 120$.
// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// You drank a bottle of Sauvignon Blanc Marlborough.
// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// Bodegas Godelia Mencía > Rose - Not Paid.

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.







