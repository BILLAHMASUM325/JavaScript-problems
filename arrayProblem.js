function tuckIn(arr1,arr2){
    let x = arr1.splice(1);
    for(let i = 0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1.concat(x)
}
console.log(tuckIn([2,9], [10, 5, 8, 4]))