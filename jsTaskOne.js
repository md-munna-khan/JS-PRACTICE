// https://github.com/ProgrammingHero1/intro-to-js-tasks

// task-1
// var iHave= 1000
// var apple = 400
// var orange = 400
// var total = apple + orange
// var result =  iHave - total
// console.log(result)


// task 2
// var Mathematics= 75.25
// var Biology= 65
// var  Chemistry =80
// var  physics =35.45
// var  Bangla =99.50
// var total =Mathematics  + Biology+Chemistry+physics+Bangla

// var result = total / 5
// console.log(result.toFixed(2))


// task 3
// var number = 119 
// var reminder = number % 5


// console.log(parseInt(reminder))

// var a = isNaN("11");
// console.log(a)
// var a = isNaN(2-10);
// console.log(a)
// 1️⃣ var a = isNaN('11');

// '11' হলো একটা string কিন্তু এর মধ্যে শুধু সংখ্যা আছে।

// isNaN() ফাংশন প্রথমে স্ট্রিংটাকে Number এ রূপান্তর করবে।
// '11' → 11 (একটা বৈধ সংখ্যা)

// এরপর চেক করবে 11 কি NaN নাকি।

// 11 একটি বৈধ সংখ্যা, তাই NaN নয়।

// ✅ ফলাফল: false
// কারণ '11' একটি সংখ্যা হিসেবে গ্রহণযোগ্য।

// 2️⃣ var a = isNaN(2 - 10);

// 2 - 10 = -8 (একটি সংখ্যা)

// isNaN(-8) → দেখে -8 কি NaN নাকি।

// -8 একটা বৈধ সংখ্যা।

// ✅ ফলাফল: false
// কারণ -8 ও একটি সংখ্যা, NaN নয়।