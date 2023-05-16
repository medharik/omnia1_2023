let current=0;
//  current=3;

//   console.log('e1',current)
// // current++;//incrementer par 1 
// current--;//decrementer par 1 

// console.log('e2',current)
function avancer() {
    current++;
}
function reculer() {
    current--;
}
function aller(x) {
    current=x;
}

//appel la fonction avancer
avancer();

// aller(10);
console.log('e1',current);
let noms=["ali.jpg","aya.jpg","rim.jpg","Omar.jpg"];
console.log(noms[current])

