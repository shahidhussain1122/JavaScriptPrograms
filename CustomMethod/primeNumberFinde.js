Number.prototype.isPrime = function(){
    if(this<=1) return false;
    if(this===2) return true;
    if(this%2===0) return false;

    const sqrt = Math.sqrt(this);
    for(let i=3; i<=sqrt; i+=2){
        if(this%i===0) return false;
    }
    return true;
}

const number = 17;
console.log(`${number} is prime?`, number.isPrime());
const anotherNumber = 18;
console.log(`${anotherNumber} is prime?`, anotherNumber.isPrime()); 

