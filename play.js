const name="tinni";
let age=24;
const Hobby=true;

const SummerizeUser=(userName,userAge,userHsHobby)=>{
    return('Name is '+userName+',age is '+userAge+'and the user has hobbies:'+userHsHobby)
        
}
console.log(SummerizeUser(name,age,Hobby));


const a=5;
const Square=a=>a*a;//arrow function
console.log(Square(a));


const B=6;
const NSquare=function (B) {
    return (B*B)
}//normal function
console.log(NSquare(B));