// const input = [1,2,3,4,5];

// const newArray = [];

// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*3);
// }

// console.log(newArray);

// const a = [1,2,3,4,5];
// const b = [6,7,8,9,0];

// function sum(a,b){
//     return a+b;
// }

// let ans = a.map((item,index) => sum(item,b[index]));
// console.log(ans);

const array = [1,2,3,4,5,6,7,8,9];

let newArray = [];

for(let i=0;i<array.length;i++){
if(array[i]%2==0){
    newArray.push(array[i]);
}
}


console.log(newArray);
    