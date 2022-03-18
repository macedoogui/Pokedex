const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
    {
      id: 1,
      nome: 'Zeraora',      
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/807.png',
      tipo: 'Elétrico',
      altura: '5m',
      peso:'1kg',
      categoria:'Thunderclap',
      habilidade:'Volt Absorb',
      descriçao:'It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks.'
    },
]

app.get ('/' , (req , res) =>{;
    res.render('index' , {pokedex});
});

app.post ('/add' , (req,res) => {
    const pokemon = req.body;
  pokemon.id = pokedex.length+1;
    pokedex.push(pokemon)

    res.redirect('/');
});



app.listen(port);

