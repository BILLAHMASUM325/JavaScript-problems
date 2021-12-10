var nameA = [3,4,5,4,3,4,7,34,8,6,11,56];
var uniqueName = [];
for(var i=0;i<nameA.length;i++){
    var element = nameA[i];
    var index = uniqueName.indexOf(element);
    if(index== -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName);