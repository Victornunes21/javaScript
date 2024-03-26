var ListaDefruta = ["Maçãs", "uvas", "Bananas", "Abacaxis","cajus"]

var primeiroItem = ListaDefruta[0];
var segundoItem = ListaDefruta[1];
var terceiroItem = ListaDefruta[2];

ListaDefruta.forEach(function(item, indice){
    console.log(item,indice)
})
/* forEach = é um for que percorre toda uma lista*/
var posicao = ListaDefruta.indexOf("Bananas") /* pos = 2 */

/*Adicionar - Remover Itens da lista */

// no final da lista
ListaDefruta.push("Laranjas") // ["Maçãs", "uvas", "Bananas", "Abacaxis","cajus", "Laranjas"]

//adiconar no inicio da lista
ListaDefruta.unshift("Kiwis") // ["Kiwis","Maçãs", "uvas", "Bananas", "Abacaxis","cajus", "Laranjas"]

// Remover Itens da lista

//remover primeiro item
ListaDefruta.shift() // ["Maçãs", "uvas", "Bananas", "Abacaxis","cajus", "Laranjas"]

//remover o ultimo
ListaDefruta.pop()// ["Maçãs", "uvas", "Bananas", "Abacaxis","cajus"]

// remover usando o indece como parametro
var pos = ListaDefruta.indexOf("Bananas")
ListaDefruta.splice(pos) //["Maçãs", "uvas","Abacaxis","cajus", "Laranjas"]

// Saber o tamanho do Array
var tam = ListaDefruta.length()

// Saber se é array 
var isArray = ListaDefruta.isArray() // True
