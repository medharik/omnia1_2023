//tableaux en JS 
let tvide=[];//tableau vide
let prix=[12,13,100,90,90];
console.log("longueur du tabaleau est ",prix.length,tvide.length)
//ajouter a la fin du tableau : push
prix.push(120);
prix.push(11);
//supprimer de la fin du tableau : 
prix.pop();
prix.pop();
console.log('tableau prix',prix);
//supprimer la case numero 
prix.splice(2,3,188);
console.log('tableau prix apres splice',prix);

let notes=[10,11,9,20,16];
// proposer des commandes pour : 
// - ajouter 15 en fin du tableau
notes.push(15);
// notes[5]=15;
// notes[notes.length]=15;
console.log('push 15',notes);
// supprimer la deuxieme note 
notes.splice(1,1)
console.log('delete de la 2eme',notes);
// supprimer la derniere note par 2 methodes 
// notes.pop()
notes.splice(notes.length-1,1);
console.log('delete la derniere',notes);
//remplacer la note 9 par 14
notes.splice(notes.indexOf(9),1,14);
console.log('rempalcer 9 par',notes);
// notes.delete(9)

//supprimer la premiere case :
notes.splice(0,1);
notes.shift();
//ajouter au debut 
notes.unshift(100)
console.log(notes);
let mots=["hp","dell","sony","asus","acer"];
// console.log(mots.join(""));
let prixHorsTaxe=[100,1000,10];
// for (let i=0;i<prixHorsTaxe.length;i++) prixTaxe[i]=prixHorsTaxe[i]*1.2;

let prixTaxe=prixHorsTaxe.map( e=>e*1.20 );
console.log(prixTaxe);
let motsHtml=mots.map(e=>"<tr><td>"+e+"</td></tr>").join(" ");
console.log(motsHtml)