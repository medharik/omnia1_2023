let images=['ali.jpg','rim.jpg','hicham.jpg'];
let encours=0;
const FIN=images.length-1;
const DEBUT =0;
//creer une fct
function avancer(){
    encours++;
    if(encours>FIN){
        encours=DEBUT;
    }
}
// avancer
//appeler une fct / execution
avancer();
avancer();
avancer();

function reculer(){
    encours--;
    if(encours<DEBUT){
        encours=FIN;
    }
}
function vers(numero){
encours=numero-1;
}
vers(3);
//reculer();
console.log('encours',encours);