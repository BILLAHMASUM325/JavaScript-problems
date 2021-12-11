function bricksCalculator(feet){
    if(feet<=10){
        firstFloor = feet*15;
        needBricks = firstFloor*1000;
        
    }
    else if(feet>10 && feet<=20){
        secondFloor = feet*12;
        needBricks = secondFloor*1000;
    }
    else if(feet>20){
        thirdFloor = feet*10;
        needBricks = thirdFloor*1000;
    }
   return needBricks;
}
var result = bricksCalculator(11);
console.log(result);