let ok=document.getElementById('ok');
let messageErreur="";
ok.addEventListener("click",function(){
    messageErreur=""
    //testerCin
    testerCin();
    //testerMatricule
    testerMatricule();
    erreur.innerHTML=messageErreur;
    
})
    let erreur=document.getElementById('erreur')

function testerCin() {
    let cin =document.getElementById('cin')
let modelCin=/^[a-z]{1,2}[0-9]{5,6}$/i
if (!modelCin.test(cin.value)) {
messageErreur+="<br>Cin incorrect"
} 

}

function testerMatricule() {
    let mat=document.querySelector('#matricule').value;
    let modelMatricule=/^[0-9]{1,4}[- /]*[a-z]{1,2}[- /]*[0-9]{1,2}$/i
    //0000-AA-00
    //* {0,}
    //?{0,1}
    //+ {1,}
    //. char

    if (!modelMatricule.test(mat)) {
        messageErreur+="<br>matricule incorrect"
    }


}


