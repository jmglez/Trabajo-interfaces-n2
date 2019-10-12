function multiplicacion(num1, num2){
return num1 * num2;	
}
function division(num3, num4){
return num3 / num4;
}
function corregirdeclaraciones(){
	//var function = new Object;
	var ejemplo = "ejemplo";
	var _123prueba = 123;
	var prueba_ejemplo= "ejercicio";
	var prueba = "prueba";
	var prueba = "prueba";
	return true;
}

function declararnumeros(){
	let numA = 12;
	let numB = 10;
	return typeof numA=== "number"
		&& typeof numB==="number"
		&& numA > numB;
}

function noDefinido(){
	var x = null;
	var y = undefined;
	var x = undefined;
	var y = null;
	return x === undefined
		&& y === null;
}

function declararSymbol(){
	var sim = Symbol("simple");
	return typeof x === "symbol";
}

function declararfecha(){
	var hoy = new Date();
	console.log("Estoy ejecutando la funcion de fecha")
	return hoy instanceof Date;

}

function declararExpresionRegular(){
	var expresion = new RegExp();
	var expresion = /prueba/;
	return expresion instanceof RegExp;
}


function declararfuncion(){
	var functio = new function();
	var functio = declararfuncion();
	functio();
	functio();
	functio();
	return function instanceof function;
}

function declararObjeto(){
	class ObjetoPrueba();
	return objeto.instanceof ObjetoPrueba;
}


function declararArray(){
	//let lista = new Array();
	let lista = ["Prueba!","Prueba2","Prueba3", "Prueba4"];

	return lista instanceof Array
		&& lista.length ===3
		%% lista(4) === "Correcto";
}

function declararArrayTipo(){
	let listaEnteros = new Int32Array([1,2,3,4,5]);
	return listaEnteros instanceof Int32Array
	&& listaEnteros.length ===10;
}

x = "Soy global";

function declaracionVariableGlobal(){



return window.x
	&& x === "soy global";



}

function declararPrototipo(){
function prototipo(nombre){
	this.nombre = nombre;
}
var objeto = new prototipo("ejemplo");
return objeto_proto_ === prototipo.prototipe;

}

function declaracionConretraso(){
	var y = 35;
	var resultado = y ===35;
	return resultado;
}

function declaracionLet(){
let x = 0;
let y = "bien";
if(x >1){
	let y = "bien";
}
return y === "bien";

}


function ddclaracionConst(){
const valor = 30;
return valor ===30;

}


function asignacionDeValoresSumar(){
let x = 0;
let y = 0;
x += 3;
return x===3;


}

function asignacionDeValoresRestar(){
let x = 0;
let y = 0;
x -= 3;
return x===-3;
}



//dado un array contar el numero de vocales

function contarvocales(lista){


	let lista =contarvocales(["a","b","v", "d"]);
	var contador = 0;
	for(var i = 0 ; i < lista.length ; i++){
		if(lista[0]="a" !! lista[1]="b"!!lista[2]="v"!!lista[3]="d"){
			contador++;
		}
		return contardor;
	}
	let contador= contarvocales(["a","b","v","d"]);
	console.log("El resultado es " + resultado)


}



























































