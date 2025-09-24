// var biriyaniPrice = 300
// if(biriyaniPrice < 400){
//     console.log("mama give me a briyani")
// }

// var weight = 20
// if(weight < 20){
//     console.log("I will carry by myself")
// }else{
//         console.log("I will rent a rickshaw")
// }

// const salary = 25000;
// const isBCS= true;
// const height = 70;

// if(salary > 2000 && height > 68){
//     console.log("su patro")
// }else{
//     console.log("onno patri khiji")
// }

// if(salary > 25000 || height > 68){
//     console.log("eso baba kobul")
// }else{
//     console.log("biya hoito na")
// }



// ================= Multi Level Condition ====================

// const price = 4000

// if(price >= 5000){
//     // 10 % discount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount
//     console.log(payAmount)
// }else if (price > 3000){
// // 5 % discount
// const discount = price * 5 /100;
// const payAmount = price - discount
// console.log(payAmount)
// }
// else{
//     console.log(price)
// }

// const age = 55
// const price = 500

// if(age < 10){
//     console.log("you can eat free")
// } else if( age >= 60){
// // 50 % discount
// const discount = price * 50 /100
// const payAmount = price - discount
// console.log(payAmount)
// }else if(age >=40){
// // 10 % discount
// const discount = price * 10 /100
// const payAmount = price - discount
// console.log(payAmount)
// }

// else{
//     console.log(price)
// }


//======================= Ternary Operator ==================
// ✅condition ? "do something when true" : do something when false
const age = 19

// if(age > 18){
//     console.log("vote dite parbi")
// }else{
//     console.log("ja ghuma")
// }


// simple ternary
// age >= 20 ? console.log("vote dite parbi"): console.log("tui baccha manush")

// let price = 500
// const isLeader = false
// if(isLeader === true){
//     price = 0
// }else{
//     price = price + 100
// }
// console.log(price)

// price = isLeader === true ? 0 : price + 200
// console.log(price)

// const isLeader= false
// if(isLeader){
//     console.log('leader ashse')
// }else{
//     "ashe naire "
// }
// if(!!isLeader){
//     console.log('leader ashse')
// }else{
//   console.log("leader ashe naire")
// }
// =========================== practice task =========================
// const burger= 600
// if(burger >500){
//     console.log("free coke")
// }else{
//     console.log("30 tk")
// }

// console.log( burger > 500?"free coke":"30tk")

const weight= 73
const height = 1.65
const bmi = weight / (height ** 2 );

if(bmi <18.5){
    console.log("you  are underWeight")
}else if(bmi >= 18.5 & bmi <=24.9){
    console.log("You are ok")
}else if(bmi >=25 & bmi <= 29.9){
    console.log("you are overweight")
}else{
console.log("you are obese")
}