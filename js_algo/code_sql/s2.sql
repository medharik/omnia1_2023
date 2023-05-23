
-- les 5 contraintes des bases de donnnees 
-- primary key (cle primaire, identifiant ): info unique + obligatoire
-- unique  : n'accepte pas ldes valeurs en double , mais peut etre null 
-- foreign key  : Etablir les relations entre tables
-- not null  : champs est obligatiore
-- check : verifie une condition , exemple : check ( salaire>3000 ), check jours in ('lundi','mardi',....)

-- creer la table produit (id,libelle,prix,qtestock, date_creation)
-- CREATE table produit(
-- id int  primary key  auto_increment,
  --   libelle varchar(50)   not null ,
 --   prix float not null ,
  -- qtestock int default 0  , 
  --  date_creation timestamp  DEFAULT CURRENT_TIMESTAMP
  -- )
  -- inserer un enregistrement (Record) 
 -- insert into produit (libelle,prix,qtestock) values ('hp dv 6',8000,150); 
--  insert into produit (libelle,prix,qtestock) values ('sony  d6',6000,20)
-- selection des produits : 
   select * from produit

-- select libelle,prix from produit
-- select libelle,prix, qtestock , prix* qtestock as "Valeur du Stock"   from produit 
-- where qtestock != 0 and prix >6100 
--   supprimer le produit ayant id=1  delete from produit where prix >9000
 -- TRUNCATE produit
-- delete from produit 
-- modifier la qtestock du produitr dell d6 (il en reste que 8 en stock)

-- update produit set qtestock=8 
-- where libelle= 'dell  d6'

