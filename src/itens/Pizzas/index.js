const pizzas = [
    {
        codigo: 6,
        destaque: false,
        tipo:'Pizzas',
        nome: 'Mussarela',
        descricao: 'Pizza sabor mussarela grande, serve 8 pedaços.',
        preco: 30,
        img: '/imgs/mussarela.jpg',
        valor:0,
        nomeComplemento: 'Borda',
        complementoObrigatorio: [
            {
                nome: 'Sem borda recheada',
                preco: 0,
            },
            {
                nome: 'Borda de Catupiry',
                preco: 5,
            },
        ],
        
    },
    {   
        codigo: 7,
        destaque: true,
        tipo:'Pizzas',
        nome: 'Calabresa',
        descricao: 'Pizza sabor calabresa grande, serve 8 pessoas.',
        preco: 35.5,
        img: '/imgs/calabresa.jpg',
        valor:0,
        nomeComplemento: 'Borda',
        complementoObrigatorio: [
            {
                nome: 'Sem borda recheada',
                preco: 0,
            },
            {
                nome: 'Borda de Catupiry',
                preco: 5,
            },
        ],

    },
    {
        codigo: 8,
        destaque: false,
        tipo:'Pizzas',
        nome: 'Portuguesa',
        descricao: 'Pizza sabor portuguesa grande, serve 8 pessoas.',
        preco: 37,
        img: '/imgs/portuguesa.jpg',
        valor:0,
        nomeComplemento: 'Borda',
        complementoObrigatorio: [
            {
                nome: 'Sem borda recheada',
                preco: 0,
            },
            {
                nome: 'Borda de Catupiry',
                preco: 5,
            },
        ],
    },      
];

export default pizzas;