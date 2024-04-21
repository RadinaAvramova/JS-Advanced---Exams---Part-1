const assert = require('chai').assert;
const petAdoptionAgency = require('./petAdoptionAgency'); 

describe("Tests for petAdoptionAgency", function() {
    
    describe("getRecommendedPets", function() {
        const petList = [
            { name: "Fluffy", traits: "Playful" },
            { name: "Whiskers", traits: "Cuddly" },
            { name: "Fido", traits: "Playful" },
        ];

        it("should return a list of recommended pets with the desired traits", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Playful");
            assert.equal(result, "Recommended pets with the desired traits (Playful): Fluffy, Fido");
        });

        it("should return 'Sorry, we currently have no recommended pets with the desired traits: Sleepy.' when no recommended pets", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Sleepy");
            assert.equal(result, "Sorry, we currently have no recommended pets with the desired traits: Sleepy.");
        });

        it("should throw an error 'Invalid input' for invalid input parameters", function() {
            assert.throws(() => petAdoptionAgency.getRecommendedPets("invalid", "Playful"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for invalid input parameters", function() {
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: "Fluffy", traits: "Playful" }], 100), "Invalid input");
        });
    });

    describe("adoptPet", function() {

        it("should return a success message when adopting a pet", function() {
            const result = petAdoptionAgency.adoptPet("Whiskers", "Alice");
            assert.equal(result, "Congratulations, Alice! You have adopted Whiskers from the agency. Enjoy your time with your new furry friend!");
        });

        it("should throw an error 'Invalid input' for non-string inputs", function() {
            assert.throws(() => petAdoptionAgency.adoptPet(100, "Alice"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for non-string inputs", function() {
            assert.throws(() => petAdoptionAgency.adoptPet("Fluffy", 100), "Invalid input");
        });
    });
});
