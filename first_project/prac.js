let arr=[1,2,3,4];
console.log(Array(9));
let result=Array(9).fill().map((value, idx)=>{
    return idx;
});
console.log(result);

// const fs=require('fs');
// const filepath=process.platform==='linux'?'dev/stdin':'./input.txt';
// const input = fs.readFileSync(filepath).toString().trim().split("\n");

// input[0]=input[0].split(" ").map(n=>+n);
// const node=input[0][0];
// const times=input[0][1];

// class Edge{
//   constructor(from, to){
//     this.from=from;
//     this.to=to;
//   }
// }

// class UnionFind{
//   constructor(n){
//     this.parent=new Array(n);// Js에서는 그냥 this.parent=[]; 로만해도 아래 인덱스 다 적용됨.
//     this.size=new Array(n).fill(0);
//     for(let i=0;i<n;++i){
//       this.parent[i]=i;
//     }
//   }

//   find(x){
//     if(x==this.parent[x])return x;
//     return this.parent[x]=this.find(this.parent[x]);
//   }
//   union(x1, x2){
//     if(this.size[x1]<this.size[x2]){
//       this.size[x2]+=this.size[x1];
//       this.size[x1]=0;
//       this.parent[x1]=x2;
//     }
//     else{
//       this.size[x1]+=this.size[x2];
//       this.size[x2]=0;
//       this.parent[x2]=x1;
//     }
//   }
// }

// let edges=[];
// for(let i=1;i<=times;++i){
//   input[i]=input[i].split(" ").map(num=>+num);
//   edges.push(new Edge(input[i][0], input[i][1]));
// }
// let answer=0;
// const uf=new UnionFind(node);
// for(let i=0;i<times;++i){
//   let parentOfP1=uf.find(edges[i].from);
//   let parentOfP2=uf.find(edges[i].to);
//   if(parentOfP1!==parentOfP2){
//     uf.union(parentOfP1, parentOfP2);
//   }
//   else{
//     console.log(i+1);
//     return;
//   }
// }
// console.log(0);