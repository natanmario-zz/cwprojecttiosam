const bebidas = [
    {
        codigo: 1,
        destaque: true,
        tipo:'Bebidas',
        nome:'Latinha',
        descricao:'Latinha de refrigerante 300ml, diversos sabores.',
        preco:[],
        img: '/imgs/bebida-lata.jpg',
        nomeComplemento:'Sabor',
        complementoObrigatorio : [
            {
                nome: 'Coca-cola',
                preco: '4',
            },

            {
                nome: 'Fanta Uva',
                preco: '3.5',
            },
        ]
    },
    {   
        codigo: 2,
        destaque: true,
        tipo:'Bebidas',
        nome:'Cerveja',
        descricao:'Cerveja longneck diversas marcas. Escolha sua preferida.',
        preco:[],
        img: '/imgs/long-neck.jpg',
        nomeComplemento:'Marca',
        complementoObrigatorio : [
            {
                nome: 'Stella',
                preco: '11',
            },

            {
                nome: 'Skol',
                preco: '9',
            },
        ]
    },
    {
        codigo: 3,
        destaque: false,
        tipo:'Bebidas',
        nome:'Suco',
        descricao:'Jarra de suco diversos sabores, serve até 6 pessoas.',
        preco:[],
        img: '/imgs/suco.jpg',
        nomeComplemento:'Sabor',
        complementoObrigatorio : [
            {
                nome: 'Laranja',
                preco: '10',
            },

            {
                nome: 'Limão',
                preco: '9',
            },
        ]
    }
]
export default bebidas; 