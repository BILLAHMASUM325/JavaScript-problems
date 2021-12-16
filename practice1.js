// function multi (a, b){
//   let x = a*2;
//   let y = b*3;
//   let z = x+y;

//   return z;
// }

// console.log(multi (4, 6))


function canNest(a,b){

    let x = a[0] < a[1] ? a[0] : a[1] ;

    let y = b[0] < b[1] ? b[0] : b[1];
   
    // if(x > y){
    //     return b.concat([a]);
    // }
    // else{
    //     return false;
    // }

    return x > y ? b.concat([a]) : false;
   
}
console.log(canNest([1,3], [0,6]))