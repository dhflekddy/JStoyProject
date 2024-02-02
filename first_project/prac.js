// const fs=require('fs');
// const filepath=process.platform==='linux'?'dev/stdin':'./input.txt';
// let input=fs.readFileSync(filepath).toString().split("\n");
// input[0]=input[0].split(" ").map(item=>+item);
// let n=input[0][0];
// const target=input[0][1];
// const arr=input[1].split(" ").map(item=>+item);

// solution(n);

// function solution(n){
//   let answer=0;
//   for(let i=0;i<n-2;++i){
//     for(let j=i+1;j<n-1;++j){
//       for(let k=j+1;k<n;++k){
//         let temp=arr[i]+arr[j]+arr[k];
//         if(temp<=target && temp>answer)answer=temp;
//       }
//     }
//   }
//   console.log(answer);
// }

// let x=5;






const fs=require('fs');
const { arrayBuffer } = require('stream/consumers');
const filepath=process.platform==='linux'?'dev/stdin':'./input.txt';
let input=fs.readFileSync(filepath).toString().split("\n");

input[0]=input[0].split(" ").map(ele=>+ele);
const n=input[0][0];
const arr=new Array(n);
const target=input[0][1];
for(let i=0;i<n;++i){
    arr[i]=input[i+1].trim();
}
console.log(arr)

solution();

function solution(){
    let dp=new Array(target+1).fill(0);
    dp[0]=1;
  // for(i in arr){
    //     for(j in Range(i, target+1)){
    //         dp[j]+=dp[j-i];
    //     }
    // }
  

    for(let i=0;i<arr.length;++i){
        for(let j=arr[i];j<target+1;++j){
            dp[j]+=dp[j-arr[i]];
        }
    }
    console.log(dp[target]);
}


