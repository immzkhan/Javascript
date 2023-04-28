 function imran(){
    let sum = 0;
    for( let i=0; i< arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum ;
 }
 console.log(imran(7,8,9,10,11,12,14,15));