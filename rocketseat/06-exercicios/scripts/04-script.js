/*
Buscando e contando dados em Array

Baseado no array de livros por categoria abaixo, faça os seguintes desafios:

- 1 Contar o número de categorias e o número de livros em cada categoria
- 2 Contar o número de autores
- 3 Mostrar livros do autor Augusto Cury
- 4 Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/

const livrosPorCategoria = [
    {
        categoria: "Autoajuda",
        livros: [
            {
                titulo: "Obrigado pelo feedback",
                autor: "Douglas Stone e Sheila Heen"
            },
            {
                titulo: "Mulheres inteligentes, relações saudáveis",
                autor: "Augusto Cury"
            },
        ],
    },
    {
        categoria: "Culinaria",
        livros: [
            {
                titulo: "Delicias da vovó",
                autor: "vovó Gertrudes"
            },
            {
                titulo: "Delicias da vovó - doces",
                autor: "vovó Gertrudes"
            },
            {
                titulo: "Comidas gauchescas",
                autor: "Neto Fagundes e os baguais"
            },
            {
                titulo: "Temperos do Nordeste",
                autor: "Fernanda Luz"
            },
        ],
    },
]


//1 quantidade de categorias
const totalCategorias = livrosPorCategoria.length;
console.log('Total de categorias: ', totalCategorias);

//1 quantidade de livros por categoria
for (const categoria of livrosPorCategoria) {
    console.log('Total de livros da categorias: ', categoria.categoria);
    console.log(categoria.livros.length);
}

//2 quantidade de autores
function contarAutores() {
    let autores = [];
    for (let categoria of livrosPorCategoria) {
        for (let livro of categoria.livros) {
            if (autores.indexOf(livro.autor) == -1) {
                autores.push(livro.autor);
            }
        }
    }
    console.log('Total de autores: ' , autores.length);
}
contarAutores();

//3 mostrar livros do Augusto Cury
function livrosAugustoCury() {
    let livros = [];
    for (let categoria of livrosPorCategoria) {
        for (let livro of categoria.livros) {
            if (livro.autor === 'Augusto Cury') {
                livros.push(livro.titulo);
            }
        }
    }
    console.log('Livros do Augusto Cury: ' , livros);
}
livrosAugustoCury();

//4 função que recebe nome do autor e devolve livros
function buscaPorAutor(autor) {
    let livros = [];
    for (let categoria of livrosPorCategoria) {
        for (let livro of categoria.livros) {
            if (livro.autor === autor) { //if (livro.autor.includes(autor)) - vai retornar livros todos livros que contém aquele nome no autor
                livros.push(livro.titulo);
            }
        }
    }
    console.log(`Livros de ${autor}:   ${livros.join(", ")}`);
}
buscaPorAutor('Fernanda Luz');
buscaPorAutor('Augusto Cury');
buscaPorAutor('vovó Gertrudes');