const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number"||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
 checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }
  
    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;
  
    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }
  
    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};


module.exports = lottery;




describe("Testing the object Lottery and it's inner functions", function () {

  describe("Testing the inner function buyLotteryTicket", function () {

      it("Should not work with incorrect first param", function () {
          expect(() => lottery.buyLotteryTicket("10", 10, true)).to.Throw("Invalid input!")
      });

      it("Should not work with incorrect second param", function () {
          expect(() => lottery.buyLotteryTicket(10, "10", true)).to.Throw("Invalid input!")
      });

      it("Should not work with incorrect third param", function () {
          expect(() => lottery.buyLotteryTicket(10, 10, "true")).to.Throw("Invalid input!")
      });

      it("Should not work false buy", function () {
          expect(() => lottery.buyLotteryTicket(10, 10, false)).to.Throw("Unable to buy lottery ticket!")
      });

      it("Should work with price > 0", () => {
          let result = lottery.buyLotteryTicket(1, 10, true);
          expect(result).to.equal("You bought 10 tickets for 10$.");
      })
      it("Should not work with price == 0", () => {
          expect(() => lottery.buyLotteryTicket(0, 10, true)).to.Throw("Invalid input!")
      })
      it("Should work with ticket count === 1", () => {
          let result = lottery.buyLotteryTicket(10, 1, true);
          expect(result).to.equal("You bought 1 tickets for 10$.")
      })
      it("Should not work with ticket count 0", () => {
          expect(() => lottery.buyLotteryTicket(10, 0, true)).to.Throw("Invalid input!");
      })
  });

  describe("Checking the inner function checkTicket", () => {
      it("Should not work if the first param is not an array", () => {
          expect(() => lottery.checkTicket({ "one": 1 }, [1, 2])).Throw("Invalid input!");
      })
      it("Should not work if the second parameter is not an array", () => {
          expect(() => lottery.checkTicket([1, 2], { "one": 1 })).Throw("Invalid input!");
      })
      it("Should not work if the arrays are empty", () => {
          expect(() => lottery.checkTicket([], [])).Throw("Invalid input!");
      })
      it("Should work with length of 6 and three winning", () => {
          let result = lottery.checkTicket([20, 10, 30, 40, 50, 60], [20, 10, 30, 0, -10, -5]);
          expect(result).to.equal("Congratulations you win, check your reward!")
      })
      it("Should work with 5 winning", () => {
          let result = lottery.checkTicket([20, 10, 30, 40, 50, 60], [20, 10, 30, 40, 50, -5]);
          expect(result).to.equal("Congratulations you win, check your reward!")
      })
      it("Should work with 6", () => {
          let result = lottery.checkTicket([20, 10, 30, 40, 50, 60], [20, 10, 30, 40, 50, 60]);
          expect(result).to.equal("You win the JACKPOT!!!")
      })
      it("Should work if they are not numbers", () => {
          let result = lottery.checkTicket(["20", "10", "30", "40", "50", "60"], ["20", "10", "30", "40", "50", "60"]);
          expect(result).to.equal("You win the JACKPOT!!!")
      })
      it("Should not work if one of them is not with length of 6", () => {
          expect(() => lottery.checkTicket(["20", "10", "30", "40", "50", "60"], ["20", "10", "30", "40", "50"])).to.Throw("Invalid input!")
      })
      it("Should check for uniques", () => {
          let result = lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]);
          expect(result).to.equal()
      })
  })

  describe("Checking the inner function secondChance", () => {
      it("Should not work with incorrect first param", () => {
          expect(() => lottery.secondChance("1", [1])).to.Throw("Invalid input!");
      })
      it("Should not work with incorrect second param", () => {
          expect(() => lottery.secondChance(1, { "one": 1 })).to.Throw("Invalid input!");
      })
      it("Should work with an empty array", () => {
          let result = lottery.secondChance(1, []);
          expect(result).to.equal("Sorry, your ticket didn\'t win!")
      })
      it("Should work with a floating number", () => {
          let result = lottery.secondChance(1.5, [3.6, 1.5, 2.6]);
          expect(result).to.equal("You win our second chance prize!")
      })
      it("Should work with a 0 and 1 param", () => {
          let result = lottery.secondChance(0, [0]);
          expect(result).to.equal("You win our second chance prize!")
      })
      it("Should work with non numbers in the array", () => {
          let result = lottery.secondChance(1, ["1", "2"]);
          expect(result).to.equal("Sorry, your ticket didn\'t win!")
      })
  })
})