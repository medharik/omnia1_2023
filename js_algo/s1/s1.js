let a = document.getElementById("n1");
let b = document.getElementById("n2");
let r = document.getElementById("res");
let resultat=0;
function calculer_produit() {
   resultat= a.value * b.value;
  console.log("le produit est " + resultat);
}


function calculer_dif() {
 resultat = a.value - b.value;
console.log("la difference  est " + resultat);

}

function calculer_somme() {
//  resultat = parseFloat(a.value) + parseFloat(b.value);
 resultat = (a.value) + parseFloat(b.value);
 resultat = +a.value +b.value;
console.log("la somme  est " + resultat);

}
f(x)=3*x;


function calculer(op){

    if (isNaN(a.value)){
alert("erreur au premier champs : ce n'est pas un nombre")
a.style.borderColor='red';
}else if(  isNaN(b.value)) {
    b.class.borderColor='red';
        alert("erreur au 2eme champs : ce n'est pas un nombre")
    }else   if (op=='+') {
        resultat = +a.value + +b.value;
      
      

    }else if (op=='-') {
        resultat = +a.value -b.value;
    }
    else if (op=='*') {
        resultat = +a.value *b.value;
    }
    else if (op=='/') {
        resultat = +a.value /b.value;
    }else{
        resultat = 0;
        console.error("opeation introuvable");
    }
    if(!isNaN(a.value)){
        a.style.borderColor='green';
    }
    if(!isNaN(b.value)){
        b.style.borderColor='green';
    }
    
  
r.innerHTML="le resultat est "+resultat;


}



