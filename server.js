const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
//configuración del puerto par aheroku
const port = process.env.PORT || 3000;

//ahora creamos un middle ware que se ejecuta sin importar la dirección que la persona escriba
app.use(express.static(__dirname+'/public'))
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); //handlebars
app.get('/', function (req,res){
    res.render('home',{
        nombre: 'marcos ortega',
        anio: new Date().getFullYear()
    })
});
app.get('/about', function (req,res){
    res.render('about',{
        anio: new Date().getFullYear()
    })
});
//lo que dice esta función es que todos los que pasen por el directorio raiz o / ejecutarán la función después de la ','
// app.get('/', function (req, res) {
//     // res.send('Hola mundo')
//     let salida = {
//         nombre: 'Marcos',
//         edad: 32,
//         url: req.url
//     }
//     // res.write('Hola Mundo');
//     res.send(JSON.stringify(salida));
// })
//
// app.get('/data', function (req, res) {
//        res.send('Hola data');
// })


app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})