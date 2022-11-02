const express = require('express')

const app = express();
const port = 5500;

app.set('views','src');
app.set('view engine','pug');

app.get('/', (req, res)=>{
    res.render('index',
    {title:'Vehiculos del Camino',
    header1:'Vehiculos del camino',
    cities:['medellin','pereira','bogota','Barraquilla'],
    employees:[
        {imagen:'P1.jpg',marca:'toyota', modelo:'2022',ref:'1205458',motor:4500000,valor:126000000,descuento:25},
        {imagen:'P2.jpg',marca:'toyota',modelo:'2023',ref:'0005262',motor:1500000,valor:120000000,descuento:20},
        {imagen:'P3.jpg',marca:'toyota',modelo:'2022',ref:'00052922',motor:1500000,valor:106000000,descuento:30},
        {imagen:'P4.jpg',marca:'toyota',modelo:'2023',ref:'0005262',motor:1500000,valor:130000000,descuento:28}
    ]
    });
    
});

app.listen(port,()=>{
    console.log(`server on port en el http:/localhost:${port}`);
})

