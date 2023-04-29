// variables , les conditions , les boucles , les tableaux 
// nodejs : environnement d'execution JS (moteur V8 de GC)
console.log('test avec nodejs');
//les boucles : instructions de controles repetitives
// for : pour un nombre de repetion connu a l'avance
for(  let i=0 ; i<3 && i%2==0 ;i++  ){
console.log(" iteration numero "+i);
}

for(  let i=1 ; 1==1 ;i++  ){
  console.log('A : i est '+i);
  if(i%3==0) break;
  console.log('B : i est '+i);
}

for(  let i=1 ; 1==1 ;i++  ){
    console.log('AX  '+i);
    if(i%3==0) continue;
    console.log('BX '+i);
    if(i==4) break;
  
  }
  for(let i=0,j=5;i<j;i++,j--){
    console.log('AY');
    console.log('i : '+i,' j '+j);
    if(i==j) break;
    if(i!=j) continue;
    console.log('BY');

  }
    
  for (let i = 3; i < 1; i++) {
    console.log('test '+i);
  }

//
// get current year?    
let year=new Date().getFullYear() ;


console.log('  annee'+year)