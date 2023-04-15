function URL(url,domain){
    let con = 'http//';
    let result = con + url + domain;
    return result;
}

let inransite = URL('imrankhan','.com');
console.log(inransite);  

console.log(URL('imrankhan','.com'));
