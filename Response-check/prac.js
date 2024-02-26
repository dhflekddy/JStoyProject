let records=[3,7,3,43,12,1];
let topFive=records.sort((a,b)=>a-b).splice(0,5);
console.log(topFive);

topFive.forEach((value, idx)=>{
    $result.append(document.createElement('br'), `${idx+1}위: ${value}ms`);
});