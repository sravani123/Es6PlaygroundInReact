const square = function(x){
    return x*x;
}
console.log(square(4));
// const squareArrow =(x) =>{
// return x*x;
// }
const squareArrow = (x) => x*x;
console.log(squareArrow(2.5));
const fullName ="Sravani Cheripalli";
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log('FirstName is ==' + getFirstName(fullName));
