//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
let resultado = 0;
	if(a > b){
		resultado = 1;
	}else if(a < b){
		resultado = -1;
	}else{
		resultado = 0;
	}
	return resultado;
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){
let resultado = 0;
let n = elemetos.length;
for(let i = 0; i < n; i++){
	if (elemetos[i]%2==0) {
			resultado += elemetos[i];
		}
	}
	return resultado;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){
	let resultado = 0;
	for(var i=0, i >= elemetos.length, i++){
		if(elemetos[i]){

		}

	}

	return resultado;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){

}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){

}
