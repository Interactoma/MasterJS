//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de datos numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "perez",
    telefono : "5525251414"
}

console.log(objeto);

//el typeof te dice el tipo de variable.
console.log(typeof objeto);

//tipo function
function miFuncion(){}

console.log(typeof miFuncion);

//tipo Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo)

//tipo clase
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//tipo array

var autos = ['BMW', 'Audi','Volvo'];
console.log(autos);
console.log(typeof autos);