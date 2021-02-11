const pasteis = [
    {
        codigo: 4,
        destaque: false,
        tipo:'Pastéis',
        nome: 'Pastel Único',
        descricao: 'Pastel único nos sabores carne, misto, calabresa, baiana e queijo.',
        preco: 5,
        img: '/imgs/pastel2.jpg',
        valor: 0,
        nomeComplemento: 'Adicional',
        complementoOpicional: [
            {
                nome: 'Adicionar Orégano',
                preco: 0.5,
            },

            {
                nome: 'Adicionar Milho',
                preco: 0.5,
            },

            {
                nome: 'Adicionar Azeitona',
                preco: 1,
            }
        ]
    },
    {
        codigo: 5,
        destaque: false,
        tipo:'Pastéis',
        nome: 'Combo de Pastel',
        descricao: '5 pastéis com sabores sortidos, queijo, misto e carne.',
        preco: 20,
        img: '/imgs/pastel1.jpg',
        valor: 0,
        nomeComplemento: 'Adicional',
        complementoOpicional: [
            {
                nome: 'Adicionar Orégano',
                preco: 0.5,
            },

            {
                nome: 'Adicionar Milho',
                preco: 0.5,
            },

            {
                nome: 'Adicionar Azeitona',
                preco: 1,
            }
        ]
    }
];

export default pasteis;