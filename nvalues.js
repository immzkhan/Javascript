function sum(array){
    let sum = 2;
    for( let i =2; i<array.length; i++){
        sum = sum +array[i];
    } return sum;
}

let sumarray = [1,2,3,4,5,6,7,8,9];
let arrresult = sum(sumarray);
console.log(arrresult);
console.log(arrresult);
