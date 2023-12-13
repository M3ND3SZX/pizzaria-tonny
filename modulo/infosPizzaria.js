var usuarios = [
    {
    nome: 'Julia Mendes',
    email: 'mendes16@hotmail.com',
    senha: 'mendes123',
    confirmacaoSenha: 'mendes123',
    telefone: '11988007795',
    id: '1',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'São Matheus',
            bairro: 'Vila Ester',
            cidade: 'Carapicuíba',
            pais : 'Brasil'
        }
    ]
    },

    {
    nome: 'Enzo Mendes',
    email: 'enzo13o@hotmail.com',
    senha: 'enzo13',
    confirmacaoSenha: 'enzo13',
    telefone: '11998249337',
    id: '2',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'São Matheus',
            bairro: 'Vila Ester',
            cidade: 'Carapicuíba',
            pais : 'Brasil'
        }
    ]
    },

    {
    nome: 'Vanessa Mendes',
    email: 'vanessa1613@gmail.com',
    senha: 'mendes1613',
    confirmacaoSenha: 'mendes1613',
    telefone: '11955777322',
    id:'3',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'São Matheus',
            bairro: 'Vila Ester',
            cidade: 'Carapicuíba',
            pais : 'Brasil'
        }
    ]
    },

    {

    nome: 'Maria Domingas',
    email: 'mariadomingas@hotmail.com',
    senha: 'mariadom07',
    confirmacaoSenha: 'mariadom07',
    telefone: '11998461234',
    id:'4',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'Rua alvorada',
            bairro: 'Jardim Rosa Maria',
            cidade: 'Osasco',
            pais : 'Brasil'
        }
    ]
    },
]

var categorias = [
 {
    id: 1,
    nome:'Pizza inteira',
    icone:'./img/xxxxxxxx'
 },
 {
    id: 2,
    nome:'Pizza brotinho',
    icone:'./img/xxxxxxxx'
 },
 {
    id:3,
    nome:'Bebidas',
    icone:'./img/xxxxxxxx'
 },
 {
    id: 4,
    nome:'Sobremesas',
    icone:'./img/xxxxxxxx'
 },
{
    id:5,
    nome:'Frutas',
    icone:'./img/xxxxxxx'
},
{
    id:6,
    nome:'sorvete',
    icone:'./img/xxxxxxxxx'
}
]

var produtos = [
    {
        id: 1,
        nomeProduto:'Pizza de calabreza com queijo',
        preco: 16.00,
        descricao: "Pizza de calabreza queijo, tomate seco ",
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1}
        }
        ],
        comentarios: [
            {
            id: 4444,
            message: 'Pizza muito boa!!!!',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            data: '21-08-2018',
            usuario: {
                id:2, 
                nome:'Enzo Mendes'}
        }
        ]
    },

    {
        id: 2,
        nomeProduto:'Pizza de peperoni com queijo',
        preco: 19.00,
        descricao: "Pizza de peperoni queijo, tomate seco",
        avaliacao: 5,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4443,
            message: 'Ótima pizza uma delícia, chegou quentinha ',
            data: '20-03-2018',
            foto: "./img/Ellipse 7.svg",
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            usuario: {
                id:1,
                nome:'Julia Mendes',
                     }
        }
        ]
    },
    {
        id: 3,
        nomeProduto:'Pizza de calabreza com queijo e borda recheada',
        preco: 19.00,
        descricao: "Pizza de peperoni queijo, tomate seco, borda recheada de catupiry ou cheddar",
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4449,
            message: 'Chegou bem rápida, e a borda bem recheada',
            data: '20-04-2018',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            usuario: {
                id:3,
                nome:'Vanessa Mendes',
                     }
        }
        ]
    },
    {
        id: 4,
        nomeProduto:'Pizza brotinho com queijo e tomate',
        descricao: "Pizza brotinho de 4 pedaços e borda recheada",
        preco:12.00,
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:2, nome:'Pizza brotinho' }
        }
        ],
        comentarios: [
            {
            id: 4445,
            message: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            data: '20-04-2018',
            usuario: {
                id:4,
                nome:'Maria Domingas',
                     }
        }
        ]
    },
    {
        id:5,
        nomeProduto:'Pizza de peperone com queijo e tomate',
        descricao: "Pizza de peperoni queijo, tomate seco, borda recheada de catupiry ou cheddar",
        preco: 16.00,
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4445,
            message: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            data: '20-04-2018',
            usuario: {
                id:1,
                nome:'Celso Arruda',
                     }
        }
        ]
    },
    {
        id: 6,
        nomeProduto:'Coca-Cola 3L',
        descricao: "Refrigerante 3 litros embalagem econômica",
        preco: 14.99,
        avaliacao: 2,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    },
    {
        id: 7,
        nomeProduto:'Cerveja Heineken',
        descricao: "Heineken Lager Beer",
        preco: 17.99,
        avaliacao: 3,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    }


]

module.exports = {
    categorias,usuarios,produtos
}