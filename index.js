function checkNumbers(num){
if (num<0) return "negative"
else return "positive"
}

function Remainder(num){
if (num%2==0) return "even number"
else return "Odd number"
}
//test above
console.log(checkNumbers(99));
console.log(checkNumbers(-15));
console.log(Remainder(15));
console.log(Remainder(16));
