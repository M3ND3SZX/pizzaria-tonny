/**
 * Autor : Julia Mendes Rodrigues 
 * Data: 13/06/2023
 * Objetivo: Criar endPoints que retornem as funções da API
 */



const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use((request,response,next) =>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())
    
    next();
})


app.get('/produtos/imagens', cors(), async function(request,response,next){


    let idImagem = request.query.id;

    let imagem = require ('./modulo/manipulandoPizzaria.js');
    let imagensProdutos = imagem.imagensProdutos(idImagem);
    
    if(imagensProdutos){
        response.json(imagensProdutos);
        response.status(200);
    }else{
        response.status(404);
        response.json({erro: 'item não encontrado' })
    }
    //http://localhost:8080/produtos/imagens/?id=2
        //Retorna a o caminho da imagem do produto junto com o nome do produto

})



app.get('/categorias', cors(), async function(request,response,next){

    let categoria = require ('./modulo/manipulandoPizzaria.js');
    let categorias = categoria.listarCategorias();

        response.json(categorias);
        response.status(200);
    
        //http://localhost:8080/categorias
        //Retorna as categorias 
} )


app.get('/comentarios/:id', cors(), async function(request,response,next){

let mostrarComentario = request.params.id

    let categoria = require ('./modulo/manipulandoPizzaria.js');
    let categorias = categoria.comentarios(mostrarComentario);

    response.json(categorias);
    response.status(200);
    
    //http://localhost:8080/comentarios/:id
    //Retorna um comentário através do id dele.
} )

app.get('/produtos', cors(), async function(request,response,next){

    let produto = require ('./modulo/manipulandoPizzaria.js');
    let produtos = produto.listarProdutos();

        response.json(produtos);
        response.status(200);
    //http://localhost:8080/produtos
    // Retorna todos os produtos em um array
} )

app.get('/usuarios', cors(), async function(request,response,next){

    let usuario = require ('./modulo/manipulandoPizzaria.js');
    let usuarios = usuario.listarUsuarios();

        response.json(usuarios);
        response.status(200);
    
        //http://localhost:8080/usuarios
        //Retorna todos os usuarios
} )

app.get('/produtosBemAvaliados', cors(), async function(request,response,next){


    let produto = require ('./modulo/manipulandoPizzaria.js');
    let produtos = produto.produtosBemAvaliados();

        response.json(produtos);
        response.status(200);

       //http://localhost:8080/produtosBemAvaliados
    //Lista produtos com avaliação maior que 3  
    
} )

app.get('/produtosMalAvaliados', cors(), async function(request,response,next){


    let produto = require ('./modulo/manipulandoPizzaria.js');
    let produtos = produto.produtosMalAvaliados();

        response.json(produtos);
        response.status(200);
      
    //http://localhost:8080/produtosMalAvaliados
    //Lista produtos com avaliação menor ou igual a 3

} )


app.get('/produtos/:id', cors(), async function(request,response,next){

    let mostrarProdutosEspecificos = request.params.id
    
        let produtoEspecifico = require ('./modulo/manipulandoPizzaria.js');
        let produtoEspecificos = produtoEspecifico.produtoEspecifico(mostrarProdutosEspecificos);
    
            response.json(produtoEspecificos);
            response.status(200);
        //http://localhost:8080/produtos/:id
        // Retorna produto especifco
    } )


app.get('/usuario/:id', cors(), async function(request,response,next){

        let mostrarUsuariosEspecificos = request.params.id
        
            let usuarioEspecifico = require ('./modulo/manipulandoPizzaria.js');
            let usuariosEspecifico = usuarioEspecifico.usuarioEspecifico(mostrarUsuariosEspecificos);
        
                response.json(usuariosEspecifico);
                response.status(200);
            
                //http://localhost:8080/usuario/:id
                //Retorna um usuario especifico a partir do id
        } )


app.listen('8080', function(){
    console.log('API FUNCIONANDO')
})