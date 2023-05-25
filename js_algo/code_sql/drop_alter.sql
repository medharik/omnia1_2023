SQL :
LDD 
-- detruit la table employee
drop table employee;

-- modifier la structure de la table departement : ajouter une colonne adresse
alter table departement add adresse varchar(100);
-- modifier la structure de la table departement : ajouter une contrainte  adresse
alter table employee add constraint dep1 foreign key(iddep) references departement(iddep);

-- modifier la structure de la table departement : supprimer la  colonne adresse
alter table departement drop column   adresse ;

-- modifier la structure de la table departement : modifier la  colonne nom
alter table departement modify    nom  varchar(250) ;


LMD : insert , update et delete
-- insert : ajoute une ligne dans la table 
insert into departement (nom,adresse) values('rh','casablanca rue v7 num 33');
-- supprimer un departement ayant id=1
delete from departement where iddep=1;
-- modifier le departement ayant iddep=1    ?   
update departement set nom ='rh', adresse='rabat' where iddep = 1  

