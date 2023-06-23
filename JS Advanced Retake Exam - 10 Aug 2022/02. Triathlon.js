class Triathlon {

    constructor(competitionName) {

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];

    }

    addParticipant(participantName, participantGender) {
        if (typeof this.competitionName !== 'string') { // is correct ?
            return;
        }

        if (typeof participantName !== 'string' || typeof participantGender !== 'string') {
            return;
        };

        if (!this.participants[participantName]) {
            this.participants[participantName] = participantGender
            return `A new participant has been added - ${participantName}`
        }
        else {
            return `${participantName} has already been added to the list`
        }

    }
    completeness(participantName, condition) {

        if (typeof participantName !== 'string' || typeof condition !== 'number' || condition < 0 || condition > 100) {
            return;
        }

        if (!this.participants[participantName]) {
            return `${participantName} is not in the current participants list`
        };

        /* if (condition < 30) { // if equal 30 or more 30
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`) // two times Error ??
        } */

        let totalCondition = Math.floor(condition / 30);
        if (totalCondition <= 0) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`) // two times Error ??
        }
        if (totalCondition > 0 && totalCondition <= 2) {
            return `${participantName} could only complete ${totalCondition} of the disciplines`
        }
        if (totalCondition = 3) {
            this.listOfFinalists.push(participantName)
            return `Congratulations, ${participantName} finished the whole competition`
        }

    }

    rewarding(participantName) {

        if (typeof participantName !== 'string') {
            return;
        }

        let isFind = false

        let findPeople = this.listOfFinalists.find(p => p === participantName)

        if (findPeople === undefined) {
            return `${participantName} is not in the current finalists list`
        }
        isFind = true;
        return `${participantName} was rewarded with a trophy for his performance`

    }

    showRecord(criteria) {
        if (typeof criteria !== 'string') {
            return;
        }

        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        }

        if (criteria === 'male') {
            let objAsArray = Object.entries(this.participants);
            for (let el of objAsArray) {
                let name = el[0];
                let gender = el[1];
                if (!gender) {
                    return `There are no ${gender}'s that finished the competition`
                }
                return `${name} is the first ${criteria} that finished the ${this.contest} triathlon`
            }
        }
        if (criteria === 'all') {
            const result = [
                `List of all ${this.competitionName} finalists:`
            ];
            let objAsArray = Object.entries(this.participants);
            for (let el of objAsArray) {
                let name = el[0];
                result.push(name)
            }
            return result.join('\n')
        }
        if (criteria === 'female') {
            let objAsArray = Object.entries(this.participants);
            for (let el of objAsArray) {
                let name = el[0];
                let gender = el[1];
                if (!gender) {
                    return `There are no ${gender}'s that finished the competition`
                }
            }
        }
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// There are no finalists in this competition

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));


// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon
