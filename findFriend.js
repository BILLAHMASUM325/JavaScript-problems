function findSmallName(names){
    var min = Infinity;
    var finalName = " ";
    for(var i = 0; i < names.length; i++){
       
      if(names[i].length < min){
        min = names[i].length; 
        finalName = names[i]; 
        console.log(finalName);
    }
    }
    return finalName;
}

console.log(findSmallName(["India", "Vutan", "masum", "billah", " Mohammad","Bangladesh", "desh"]));