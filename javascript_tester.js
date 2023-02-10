// 1)Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
// let myNumber = 42
// let myName = "Eric"
// console.log("start",myNumber);
// console.log("start",myName);
// if(myNumber == 42){
//     myNumber = myName;
//     console.log("loop number change",myNumber);
// }
// if(myName == "Eric"){
//     let myNumber = 42
//     myName=myNumber;
//     console.log("loop name change",myName);
// }

// 2) Print 52-1066
// Print integers from -52 to 1066 using a FOR loop.
// for (let x =1066; x>51; x--){
//     console.log(x);
// }
    
// 3)Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// function beCheerful(){
//     console.log("Good Morning!");
// }
// // beCheerful();
// for (let num =0;num<99;num++){
//     beCheerful();
// }

// 4)Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// for(let x=3;x>-303;x-=3){
//     if(x==(-3)){
//         continue;
//     }
//     else if(x==(-6)){
//         continue;
//     }
//     console.log(x);
// }

// 5)Print integers from 2000 to 5280, using a WHILE.
// let n=2000;
// while(n<5280){
//     n++;
//     console.log(n);
// }

// 6)If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
// function birthday(x,y){
//     if(x==1 || y==2){
//         console.log("How did you know?");
//     }
//     else{
//         console.log("Just another day");
//     }
// }
// birthday(3,5);
// birthday(1,2);

// 7)Write a function that determines whether a given year is a leap year. If a year is divisible by 4, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
// function froggyYear(year){
//     console.log("start", year);
//     // START HERE you can log year but non of the ifs run after that
//     let a = 4;
//     let b = 100;
//     let c =  400;
    
//     if((year%a)==0){
//         console.log("Leap year baby!", year);
//         if((year%b)==0){
//             console.log("Leap year baby!", year);
//             if((year%c)==0){
//                 console.log("Leap year baby!", year);
//             }
//         }
//     }
//     else{
//         console.log("No Leap Year");
//     }
// }
// froggyYear(2023);
// froggyYear(4444);
// froggyYear(2000);
// froggyYear(3333);

// // 8)Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// let countMe =0;
// for (let  x=512;x<4097;x+=5){
//     console.log(x);
//     countMe++;
// }
// console.log(countMe);

// 9)Print multiples of 6 up to 60,000, using a WHILE.
// let x =6;
// while(x<60000){
//     x+=6;
//     console.log(x);
// }
// console.log("end");

// 10)Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// let b = 1;
// while(b<101){
//     b++;
//     if(b%5==0){
//         console.log("Cookies", b);
//     }
//     if(b%10==0){
//         console.log("Dogs", b);
//     }
// }
// console.log("end");

// 11)Your function will be given an input parameter incoming. Please console.log this value.
// function aNumber(p){
//     console.log(p);
// }

// 12)Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
// let c = (-300000);
// let array =[];
// while(c<300000){
//     // incrementing up
//     c++;
//     // check for odd or even. only apply addition to odd numbers
//     if((c%2)==1){
//         // if the value of c does not exist in the array, add it!
//         if(!array[c]){
//             array.push(c);
//         }
//         // let sum= array.reduce((a,b)=>a+b, 0)
//         // console.log(sum);
//         // let newSum = sum+=c;
//         // console.log(newSum);
//     }
// }
// console.log(array);
// // found on stack overflow; reduceRight is an iterative method starting at the end of the array and adding all the values in the array
// let answer = array.reduceRight((a,b)=>a+b,0)
// console.log(answer);
// console.log("did it work?");

// 13)Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
// let start = 2016;
// while(start>4){
//     start-=4;
//     console.log(start);
// }

// 14)Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
// CURRENTLY WRONG RETURNS 2,5,8
// function countDown(lowNum, highNum, mult){
//     for(let i=lowNum;i<=highNum;i+=mult){
//         console.log("for",i);
//         if(mult[i] == mult/mult[i]){
//             console.log("if",i);
//         }
//     }
    
// };
// countDown(2,9,3);

// 15)This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).