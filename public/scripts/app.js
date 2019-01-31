'use strict';

// arguments object - no longer bound with the arrow functions
var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(25, 10));
//  this keyword is no longer bound 
var user = {
    name: 'Sravani',
    cities: ['Hyderabad', 'Bangalore'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log('***********');
        // this.cities.forEach ((city) => {
        //     console.log(this.name + ' lived in ' + city);
        // });
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 3, 4, 5, 6],
    multipyNumbers: function multipyNumbers(multiplyBy) {
        return this.numbers.map(function (number) {
            return number * multiplyBy;
        });
    }
};
console.log(multiplier.multipyNumbers(2));
