// //la fonction find
// let produits=['hp','dell','sony'];
// produits.find(function(x){
// // return 
// })
//definition de la fct 1 
//fct nommee
function fct1(prenom="") {
 console.log('salut  '+prenom)   
}
// f(x,y)=3*x+y;
fct1("ali");
fct1("aya");
fct1();


//fct anonyme (closure, predicate, lamda)
const fct2=function(prenom){
   console.log('salut 2 '+prenom)       
}
//arrow function : fonction flechee
const fct3=(prenom)=>{
    console.log('salut 3 '+prenom)
}

console.log('f',f)
//appel 
// fct1();

function ajouter(a,b){
return a+b;
}
let s=ajouter(2,3);
console.log('la somme est ',s)