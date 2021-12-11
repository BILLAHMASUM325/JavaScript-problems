function woodCalculator(chair,table,bed){
    oneChair = chair*1;
    oneTable = table*3;
    oneBed = bed*5;
    sum = oneChair+oneTable+oneBed;   
    return sum;
}
var cubicWood = woodCalculator(1,1,1);
console.log(cubicWood);