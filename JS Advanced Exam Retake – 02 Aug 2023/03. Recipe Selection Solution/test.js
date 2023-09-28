const chai = require('chai');
const expect = chai.expect;
const recipeSelection = require('./recipeSelection');

describe('recipeSelection', () => {
  describe('isTypeSuitable', () => {
    it('should return appropriate suitability messages for dietary restrictions', () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians");
      expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal("This recipe is not suitable for vegans");
      expect(recipeSelection.isTypeSuitable("Fish", "Pescatarian")).to.equal("This recipe is suitable for your dietary restriction");
    });

    it('should throw an error for invalid input', () => {
      expect(() => { recipeSelection.isTypeSuitable(10, "Meat") }).to.throw('Invalid input');
      expect(() => { recipeSelection.isTypeSuitable("Meat", 30) }).to.throw('Invalid input');
    });
  });

  describe('isItAffordable', () => {
    it('should return the correct affordability message', () => {
      expect(recipeSelection.isItAffordable(10, 20)).to.equal("Recipe ingredients bought. You have 10$ left");
      expect(recipeSelection.isItAffordable(50, 30)).to.equal("You don't have enough budget to afford this recipe");
    });

    it('should throw an error for invalid input', () => {
      expect(() => { recipeSelection.isItAffordable(10, "20") }).to.throw('Invalid input');
      expect(() => { recipeSelection.isItAffordable("50", 30) }).to.throw('Invalid input');
    });
  });

  describe('getRecipesByCategory', () => {
    it('should return an array of recipe titles for the given category', () => {
      const recipes = [
        { title: "Pasta Carbonara", category: "Italian" },
        { title: "Spicy Tofu Stir-Fry", category: "Asian" },
        { title: "Classic Caesar Salad", category: "Salads" },
        { title: "Chocolate Chip Cookies", category: "Desserts" }
      ];

      expect(recipeSelection.getRecipesByCategory(recipes, "Italian")).to.deep.equal(["Pasta Carbonara"]);
      expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry"]);
      expect(recipeSelection.getRecipesByCategory(recipes, "Salads")).to.deep.equal(["Classic Caesar Salad"]);
    });

    it('should throw an error for invalid input', () => {
      const recipes = [
        { title: "Pasta Carbonara", category: "Italian" },
        { title: "Spicy Tofu Stir-Fry", category: "Asian" }
      ];

      expect(() => { recipeSelection.getRecipesByCategory(recipes, 123) }).to.throw('Invalid input');
      expect(() => { recipeSelection.getRecipesByCategory("recipes", "Italian") }).to.throw('Invalid input');
    });
  });
});
