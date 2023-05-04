let produits=['hp','dell','sony'];

let r=produits.find((x)=> {
    return x=='dell';
});

console.log('r',r);

let tarifs =[1,30,90,30,4,30];//euro
r=tarifs.find(e=> e==30);
console.log('r 2 ',r);
//filter
let prix=[12,-2,-13,3,-30,12];
let r3=prix.filter(e=>e%2==0 && e>0);
console.log('r3',r3);
let m=tarifs.map(e=> e+"DHS");
console.log('la tarifs en DHS',m)
