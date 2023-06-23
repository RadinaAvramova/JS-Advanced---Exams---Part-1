class JobOffers {

    constructor(employer, position) {
        this.employer = employer,
            this.position = position,
            this.jobCandidates = []
        this.jobCandidatesNames = [];
    }

    jobApplication(candidates) {
        let names = [];
        for (let row of candidates) {
            row = row.split("-");
            let name = row[0];
            names.push(name);
            let education = row[1];
            let yearsExpirience = Number(row[2]);
            if (!this.jobCandidatesNames.includes(name)) {
                this.jobCandidatesNames.push(name);
                this.jobCandidates.push({ name, education, yearsExpirience });
            } else {
                let searchIndex = this.jobCandidatesNames.indexOf(name);
                let previousObj = this.jobCandidates[searchIndex];
                if (yearsExpirience > previousObj["yearsExpirience"]) {
                    previousObj["yearsExpirience"] = yearsExpirience;
                }
            }
        }

        names = new Set(names);
        names = Array.from(names);

        return `You successfully added candidates: ${names.join(", ")}.`
    }

    jobOffer(chosenPerson) {
        chosenPerson = chosenPerson.split("-");
        let chosenName = chosenPerson[0];
        let minimumExperience = Number(chosenPerson[1]);
        if (!this.jobCandidatesNames.includes(chosenName)) {
            throw new Error(`${chosenName} is not in the candidates list!`);
        }
        let searchIndex = this.jobCandidatesNames.indexOf(chosenName);
        let chosenPersonObj = this.jobCandidates[searchIndex];

        if (chosenPersonObj["yearsExpirience"] !== "hired") {
            if (minimumExperience > chosenPersonObj["yearsExpirience"]) {
                throw new Error(`${chosenName} does not have enough experience as ${this.position}, minimum requirement is ${minimumExperience} years.`)
            }
            chosenPersonObj["yearsExpirience"] = "hired";
            return `Welcome aboard, our newest employee is ${chosenName}.`
        }

    }

    salaryBonus(name) {
        if (!this.jobCandidatesNames.includes(name)) {
            throw new Error(`${name} is not in the candidates list!`)
        }
        let searchIndex = this.jobCandidatesNames.indexOf(name);
        let currentObj = this.jobCandidates[searchIndex];
        if (currentObj["education"] === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (currentObj["education"] === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (this.jobCandidatesNames.length === 0) {
            throw new Error("Candidate Database is empty!")
        }
        let unsortedNames = this.jobCandidatesNames.slice()
        let sortedNames = this.jobCandidatesNames.sort((a, b) => a.localeCompare(b));
        this.jobCandidatesNames = unsortedNames;
        let leftCandidates = [];
        for (let name of sortedNames) {
            let currentIndex = this.jobCandidatesNames.indexOf(name);
            leftCandidates.push(`${this.jobCandidates[currentIndex]["name"]}-${this.jobCandidates[currentIndex]["yearsExpirience"]}`)
        }
        return `Candidates list:\n${leftCandidates.join("\n")}`
    }
}