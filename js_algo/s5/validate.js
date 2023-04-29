let ok=document.getElementById('ok');
let erreur=document.getElementById('erreur');

ok.addEventListener("click",function(){
    erreur.innerHTML=""
    validerNp();
    validerEmail();
    validerTel();
    afficherErreur();
})

function validerNp(){
     let np=document.getElementById('np');
     let nbnChar=np.value.length;
     if(nbnChar==0){
        erreur.innerHTML+="Veuillez saisir votre nom & Prenom<br>";
    }
    else   if(np.value.length<2){
       erreur.innerHTML+="le champs  nom & Prenom est trop court<br>";
     }

}



function validerEmail(){
    let email=document.getElementById('email');
    let emailReg=/^([a-z]{1,})(a-z._0-9){0,}@osbt[.]ma$/i;
    if (!emailReg.test(email.value)) {
        erreur.innerHTML+="Email non valide<br>";
    }
}

function validerTel(){
   let tel=document.getElementById('tel') ;
   let modelTel=/^0[0-9]{3}[/ -]{0,}([0-9]{2}[/ -]{0,}){3}$/
   if(!tel.value.match(modelTel)){
    erreur.innerHTML+="Numéro de téléphone non valide<br>";
   }

}

let i=0
let cpt=document.getElementById('cpt');
let message=document.getElementById('message');
message.addEventListener("keyup",function(event){
//    event.preventDefault()
let x =message.value.length;
console.log(message.value)
 cpt.innerText=message.value.length


});

let memoire=""
message.addEventListener("keydown",function(event){
//    event.preventDefault()

console.log(message.value)
let i=message.value.length
 cpt.innerText=i
 console.log(event.key)

if(i<10){
memoire=message.value
}else{
    message.value=memoire;
}


// if (i==10  ) {

//     if(event.key!='Backspace' )
//     event.preventDefault()
// }

});

function traiterMessage(){
cpt.innerText=++i
}



function afficherErreur() {
if (erreur.innerHTML=="") {
    erreur.style.display='none';
} else {
    erreur.style.display='block';
    
}}



