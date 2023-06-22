
const express = require('express')
const app = express()
const port = 8090
//pour que l'app recoit et traite des requete json
app.use(express.json())
const cors = require('cors');
app.use(cors({
    origin:'*' 
}));
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'crudnodejs'
});
 
connection.connect(); 
app.get('/accueil', (req, res) => {
   
  res.send('Hello World!')
})
// ..requete de type post pour creer   
app.post('/produits', (req, res) => {
    connection.query('insert into ligne_facture set ?',req.body, function (error, results, fields) {
        if (error) throw error;   
           res.json(results); 

        // console.log('liste des produits est : ', results[0].libelle);
      }); 
})
app.get('/listefacture', (req, res) => { 
    connection.query('select DISTINCT numero_facture from ligne_facture', function (error, results, fields) {
        if (error) throw error;   
           res.json(results); 

        // console.log('liste des produits est : ', results[0].libelle);
      }); 
})
// ..requete de type post pour creer  
app.get('/produits/numero_facture/:numero_facture', (req, res) => {
    connection.query('select * from ligne_facture where numero_facture=?',req.params.numero_facture, function (error, results, fields) {
        if (error) throw error;   
           res.json(results); 

        // console.log('liste des produits est : ', results[0].libelle);
      });
})
// ..requete  pour recuperer un seul prodoit   
app.get('/produits/:id', (req, res) => {
    connection.query('select * from ligne_facture where id=?',req.params.id ,function (error, results, fields) {
        if (error) throw error;   
           res.json(results[0]); 

        // console.log('liste des produits est : ', results[0].libelle);
      });
})
app.delete('/produits/:id', (req, res) => {
    // var id= req.params.id
    // var libelle= req.params.libelle
    //object desctructuring
    const {id}=req.params
   
    connection.query('delete from ligne_facture where id=? ',[id],function (error, results, fields) {
        if (error) throw error;   
           res.json(results);

        // console.log('liste des produits est : ', results[0].libelle);
      });
});

//requete pour consulter un produit par id
app.get('/produits/:id', (req, res) => {
const {id}=req.params;
    connection.query('select * from ligne_facture where id=?',[id],function (error, results, fields) {
        if (error) throw error;   
           res.json(results[0]);

        // console.log('liste des produits est : ', results[0].libelle);
      });
});
//requete de type put (update)
app.put('/produits', (req, res) => {
const {id,libelle,prix}=req.body;
    connection.query('update ligne_facture set libelle=? , prix=? where id=?',[libelle,prix,id],function (error, results, fields) {
        if (error) throw error;   
           res.json(results);

        // console.log('liste des produits est : ', results[0].libelle);
      });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})