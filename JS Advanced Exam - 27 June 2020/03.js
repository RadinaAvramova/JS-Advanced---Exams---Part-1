class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload === this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!")
        }
        let found = this.clients.find(client => client.ownerName === ownerName && client.petName === petName)
        if (found && found.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${found.procedures.join(", ")}.`)

        }
        this.currentWorkload++;
        this.clients.push({ ownerName, petName, kind, procedures })
        return `Welcome ${petName}!`;
    }
    onLeaving(ownerName, petName) {
        let found2 = this.clients.find(client => client.ownerName === ownerName)
        if (!found2) {
            throw new Error("Sorry, there is no such client!");
        }
        let found = this.clients.find(client => client.ownerName === ownerName && client.petName === petName)
        if (!found ||(found && found.procedures.length === 0)) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }
        this.currentWorkload--;
        this.totalProfit+=found.procedures.length*500;
        found.procedures=[];
        return`Goodbye ${ petName }. Stay safe!`
    }
    toString (){
        let arr=[];
        let count=this.clients.filter(client=>client.procedures.length>0);
       arr.push(`${ this.clinicName } is ${Math.floor(count.length/this.capacity*100)}% busy today!`)
       //console.log(this.totalProfit)
       arr.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)
      this.clients.sort((client,b)=>client.ownerName.localeCompare(b.ownerName)||client.petName.localeCompare(b.petName))
      //this.clients.sort((client,b)=>client.ownerName.localeCompare(b.ownerName))
       //console.log(this.clients)
       let previous="";
       
       for (const iterator of this.clients) {

           if(previous!==iterator.ownerName){
            let str='';
            str=`${iterator.ownerName} with:`;
            arr.push(str)
            arr.push(`---${iterator.petName} - a ${iterator.kind.toLowerCase()} that needs: ${iterator.procedures.join(", ")}`)
           }else{
            arr.push(`---${iterator.petName} - a ${(iterator.kind).toLowerCase()} that needs: ${iterator.procedures.join(", ")}`)
            
           }
           
           
           previous=iterator.ownerName
       }
       return arr.join("\n")
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
// console.log(clinic.toString());