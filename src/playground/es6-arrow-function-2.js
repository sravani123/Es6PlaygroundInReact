// arguments object - no longer bound with the arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(25, 10));
//  this keyword is no longer bound 
const user = {
    name: 'Sravani',
    cities: ['Hyderabad', 'Bangalore'],
    printPlacesLived() {
        console.log('***********');
        // this.cities.forEach ((city) => {
        //     console.log(this.name + ' lived in ' + city);
        // });
       return  this.cities.map((city) => {
            return this.name + ' has lived in '+city ;
        });
    }
};
console.log(user.printPlacesLived()); 

const multiplier = {
    numbers: [2, 3, 4, 5, 6],
    multipyNumbers(multiplyBy) {
        return this.numbers.map((number) => {
            return number * multiplyBy
        });
    }
}
console.log(multiplier.multipyNumbers(2));

