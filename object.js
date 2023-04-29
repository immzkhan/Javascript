 let userName = {
    firstname: 'imran', 

    lastname: 'khan',

    role : 'admin',

    loginCount : 25,


 };

 console.log(userName['role']);

 userName.loginCount = 61;

 console.log(userName);

 for ( let x in userName){
    console.log(userName[x]);
 }

 userName.role = ""

 console.log(userName);