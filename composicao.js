function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

function Capitulo(titulo, paginas) {
    this.titulo = titulo;
    this.paginas = paginas;
}

var livro = new Livro("Livro Teste", "Autor Teste");
var capitulo1 = new Capitulo("Capítulo 1", 10);
var capitulo2 = new Capitulo("Capítulo 2", 11);

// Os objetos do tipo Capitulo fazem parte da composição do objeto livro
livro.capitulo1 = capitulo1;
livro.capitulo2 = capitulo2;

// Acessando as propriedades:
console.log(livro.titulo + " - " + livro.autor);
console.log(livro.capitulo1.titulo + " - " + livro.capitulo1.paginas);
console.log(livro.capitulo2.titulo + " - " + livro.capitulo2.paginas);

