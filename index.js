const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
    {
      id: .1,
      nome: '',      
      imagem: '',
      tipo: '',
      altura: '',
      peso:'',
      categoria:'',
      habilidade:'',
      descriçao:''
    }
]

app.get ('/' , (req , res) =>{;
    res.render('index' , {pokedex});
});

app.post ('/add' , (req,res) => {
    const pokemon = req.body;
    pokedex.push(pokemon)

    res.redirect('/');
});



app.listen(port);

