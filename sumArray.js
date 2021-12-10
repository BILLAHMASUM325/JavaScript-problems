// var numbers = [23,45,64,23,45,12,45];
// var sum = 0;
// for(var i=0; i<numbers.length;i++){
//     var element = numbers[i];
//     sum = sum+element;
// }
// console.log("Sum of array is : ", sum);


function sumOfArray(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length;i++){
    var element = numbers[i];
    sum = sum+element;
}
return sum;
}
var numbers = [23,45,64,23,45,12,45];
var result = sumOfArray(numbers);
console.log("Sum of Array: ",result);