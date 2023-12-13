
var  pizzariaTony = require ('./infosPizzaria.js')

const imagensProdutos = (id) => {
    let imagens = pizzariaTony.produtos 
    let idProduto = id
    let status  = false
    let imagensArray = []

    imagens.forEach((produtos) => {
        if(produtos.id == idProduto){
        let produtoImagem  = {
            nome: produtos.nomeProduto,
            imagem: produtos.imagem
        }
        status = true
        imagensArray.push(produtoImagem)
    }
    })

    let imagensJSON = {imagensArray}

    if(status){
        return imagensJSON
    }else{
        return false
    }
   

}


const listarCategorias = () => {
    let categorias = pizzariaTony.categorias
    let categoriasArray = []
    let status = false
    
    categorias.forEach((categoria) => {
        
        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nome,
            imagem: categoria.icone 
        }    
        
        status = true
        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }

    if(status){
    return categoriasJSON
    }else{
        return false
    }
}

 const produtosBemAvaliados = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let status = false

    
     produtos.forEach((pizza) => {
        
         if(pizza.avaliacao > 3){

             let pizzaJSON = {
                 nome: pizza.nomeProduto,
                 id: pizza.id,
                 avaliacao: pizza.avaliacao
             }

             status = true
             produtosArray.push(pizzaJSON)

         }

     })

     let produtosJSON = { produtosArray }
     
    if(status){
        return produtosJSON
    } else {
        return false
    }
 }

 const produtosMalAvaliados = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let status = false

    
     produtos.forEach((pizza) => {
        
         if(pizza.avaliacao <= 3){

             let pizzaJSON = {
                 nome: pizza.nomeProduto,
                 id: pizza.id,
                 avaliacao: pizza.avaliacao
             }

             status = true
             produtosArray.push(pizzaJSON)

         }

     })

     let produtosJSON = { produtosArray }
     
    if(status){
        return produtosJSON
    } else {
        return false
    }
 }

const produtoEspecifico = (id) => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){

            let pizzaJSON = {
                nome: pizza.nomeProduto,
                id: pizza.id,
                descricao: pizza.descricao,
                avaliacao: pizza.avaliacao
            }
            
            status = true
            produtosArray.push(pizzaJSON)

        }

    })

    let produtosJSON = { produtosArray }

    if(status){
        return produtosJSON
    } else {
        return false
    }
}



const usuarioEspecifico = (id) => {
    let usuarios = pizzariaTony. usuarios
    let idUsuario = id
    let usuariosInfo
    let status = false

    usuarios.forEach((usuarios) => {
        
        if (usuarios.id == idUsuario){

            usuariosInfo = {
                id: usuarios.id,
                nome: usuarios.nome,
                email: usuarios.email,
                telefone: usuarios.telefone,
                endereco: usuarios.endereco
            } 

            status = true 
        }else{
            console.log('usuario não existe')
        }

    
    })

    if (status) {
        return usuariosInfo 
    } else {
        return false
    }
    
}

const listarProdutos = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let status = false
    
    produtos.forEach((produtos) => {
        
        let produtosInfo = {
            id: produtos.id,
            preco: produtos.preco,
            nomeProduto: produtos.nomeProduto,
            descricao: produtos.descricao,
          
        }    
        
        produtosArray.push(produtosInfo)
        status = true
    })

    let produtosJSON = { produtosArray }
    
    if (status){
        return produtosJSON
    }else{
        return false
    }
   
}

const listarUsuarios = () => {
    let usuarios = pizzariaTony. usuarios
    let usuariosArray = []
    let status = false

    usuarios.forEach((usuarios) => {

        let usuariosInfo = {
            id: usuarios.id,
            nome: usuarios.nome,
            email: usuarios.email,
            telefone: usuarios.telefone,
            endereco: usuarios.endereco
        }

        usuariosArray.push(usuariosInfo)
         status= true
    })
     
    let usuariosJSON = { usuariosArray }

    if(status){
        return usuariosJSON
    }else{
        return false
    }
    
}

const comentarios = (id) => {
    let produtos = pizzariaTony.produtos
    let comentariosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){
            pizza.comentarios.forEach ((comentarios) => {
            
                let comentariosJSON = {
                    
                    nome: usuarioEspecifico(comentarios.usuario.id).nome,
                    id: comentarios.id,
                    descricao: comentarios.descricao,
                    data: comentarios.data,
                    usuario: comentarios.usuario.id,
                    foto: comentarios.foto,
                    titulo: comentarios.message
                }
                
                status = true
                comentariosArray.push(comentariosJSON)

            })

        }

    })

    let comentariosJSON = { comentariosArray }

    if(status){
        return comentariosJSON
    } else {
        return false
    }
}


//console.log (listarCategorias());
//console.log(produtoEspecifico(2));
//console.log (produtosBemAvaliados());
//console.log(produtosMalAvaliados());
//console.log (listarProdutos());
//console.log (comentarios(1))
//console.log (listarUsuarios ());
//console.log (usuarioEspecifico (3));
//console.log (imagensProdutos(4));

module.exports = {
    imagensProdutos,
    listarCategorias,
    comentarios,
    listarProdutos,
    listarUsuarios,
    produtosBemAvaliados,
    produtosMalAvaliados,
    produtoEspecifico,
    usuarioEspecifico
    
}