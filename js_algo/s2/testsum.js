function  getMaxSubSum(a) {
    let ps=0,s=0,max=0;
    for(i of a ){
     ps+=i;
    max=Math.max(max,ps);
     if(ps<0)  ps=0;
    if(max>=0) s=max; 
    }
   console.log(s);
 return s;
  }
//  getMaxSubSum([-1, 2, 3, -9]);
//  getMaxSubSum([-1, 2, 3, -9, 11]) ;
//  getMaxSubSum([100, -9, 2, -3, 5]);
function filtre(a) {
//    a= a.filter(x=> x%2==0);
a.splice(1,1);   
console.log("filter",a);
}
let a=[1,2];
filtre(a);
a.sort((x,y)=> x-y);
console.log("tri",a);
a=[-1,2,-3];
let s=a.reduce((sum,current) =>{
if(sum>=0) return     sum+current;
else  return 0;
},0);
console.log("s",s);

function camelize(a) {
s=a.split("-").map((e,i)=> (i==0)? e:e[0].toUpperCase()+e.split("").splice(1).join("")).join("");
console.log("camel",s);
}

camelize("background-color");

function filterRange(arr, a, b){
    
    return arr.filter((x)=> (x>=a && x<=b ));
    }
    f=filterRange([5, 3, 8, 1],1,4),[3,1]
    f=filterRange([1,2,7],1,3);
    console.log('f',f)
    function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
        };
       x= removeDuplicates([1,1,2,3,3]);console.log('x',x)