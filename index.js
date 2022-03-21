require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: 'Raikou',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png',
    tipo: 'Eletric',
    altura: '1.9m',
    peso: '178kg',
    categoria: 'Thunder',
    habilidade: 'Pressure',
    descriçao: 'Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.'
  },
  {
    id: 2,
    nome: 'Entei',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png',
    tipo: 'Fire',
    altura: '2.1m',
    peso: '198kg',
    categoria: 'Volcano',
    habilidade: 'Pressure',
    descriçao: 'Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.'
  },
  {
    id: 3,
    nome: 'Suicune',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png',
    tipo: 'Water',
    altura: '2m',
    peso: '187kg',
    categoria: 'Aurora',
    habilidade: 'Pressure',
    descriçao: 'Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.'
  }
]

  let pokemon = undefined;

app.get('/', (req, res) => {
  ;
  res.render('index', { pokedex,pokemon });
});

app.post('/add', (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon)

  res.redirect('/');
});



app.listen(port);

