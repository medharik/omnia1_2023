les expressions regulieres :
interval: 
[a-z] : lettre
[0-9] : chiffre
[a-z0-9] : alphanumerique
[a-z.@/+] : lettre de a à z et .@/+

quantificateur : 
cin : bj123451, ba123877, a12345
[a-zA-Z]{1,2}[0-9]{5,6}
en javascript :
let modelCin =/[a-zA-Z]{1,2}[0-9]{5,6}/
let cin ="bj123456";
if (modelCin.test(cin)) {
    alert("CIn correct")
}else{
    alert("CIn incorrect");
}

// https://github.com/medharik/omnia1_2023
1/A/1
12A-12324
1B123