//Primero creamos los array con las posiciones de subcas como Objetos.
//Tendremos 4 botones que representaran el color de cada zona
//Al coincidir la Posición de subca con la zona, eliminará la subca
//del array que la contiene, así 1 por 1 hasta dejar cada array vacío.


let zonaA = [   {subca:"AND000", color:"ROJO" },
				{subca:"OCS060", color:"ROJO" },
				{subca:"OCS061", color:"ROJO" },
				{subca:"OCS062", color:"ROJO" },
				{subca:"OCS063", color:"ROJO" },
				{subca:"OCS064", color:"ROJO" },
				{subca:"OCS065", color:"ROJO" },
				{subca:"OCS066", color:"ROJO" },
				{subca:"OCS069", color:"ROJO" },
				{subca:"OCS070", color:"ROJO" },
				{subca:"OCS071", color:"ROJO" },
				{subca:"URB160", color:"ROJO" },
				{subca:"URB161", color:"ROJO" },
				{subca:"URB162", color:"ROJO" },
				{subca:"URB163", color:"ROJO" },
				{subca:"URB164", color:"ROJO" },
				{subca:"URB165", color:"ROJO" },
				{subca:"URB166", color:"ROJO" },
				{subca:"URB167", color:"ROJO" },
				{subca:"URB168", color:"ROJO" },
				{subca:"SCO1", color:"ROJO" },
				{subca:"SER1", color:"ROJO" },
				{subca:"SRU1", color:"ROJO" },
				{subca:"SBH1", color:"ROJO" },
{subca:"STD1", color:"ROJO" }];

let zonaB = [   {subca:"AND010", color:"AMARILLO" },
				{subca:"AND011", color:"AMARILLO" },
				{subca:"HOP300", color:"AMARILLO" },
				{subca:"OCS050", color:"AMARILLO" },
				{subca:"OCS051", color:"AMARILLO" },
				{subca:"OCS052", color:"AMARILLO" },
				{subca:"OCS053", color:"AMARILLO" },
				{subca:"OCS067", color:"AMARILLO" },
				{subca:"OCS068", color:"AMARILLO" },
				{subca:"URB150", color:"AMARILLO" },
				{subca:"URB151", color:"AMARILLO" },
				{subca:"WEB200", color:"AMARILLO" },
				{subca:"WEB202", color:"AMARILLO" },
				{subca:"PCK350", color:"AMARILLO" },
				{subca:"SBU1", color:"AMARILLO" },
				{subca:"SBU2", color:"AMARILLO" },
				{subca:"SBU3", color:"AMARILLO" },
				{subca:"SMQ1", color:"AMARILLO" },
				{subca:"SRO1", color:"AMARILLO" },
				{subca:"SSF1", color:"AMARILLO" },
				{subca:"SCF2", color:"AMARILLO" },
{subca:"SLA1", color:"AMARILLO" }];

let zonaC = [   {subca:"COR125", color:"AZUL" },
				{subca:"COR126", color:"AZUL" },
				{subca:"URB175", color:"AZUL" },
				{subca:"URB176", color:"AZUL" },
				{subca:"URB177", color:"AZUL" },
				{subca:"SST1", color:"AZUL" },
				{subca:"STU1", color:"AZUL" },
				{subca:"SCZ1", color:"AZUL" },
				{subca:"SNQ1", color:"AZUL" },
				{subca:"SJU1", color:"AZUL" },
				{subca:"STW1", color:"AZUL" },
{subca:"SRV1", color:"AZUL" }];

let zonaD = [   {subca:"AND025", color:"VERDE" },
				{subca:"AND026", color:"VERDE" },
				{subca:"AND027", color:"VERDE" },
				{subca:"AND028", color:"VERDE" },
				{subca:"AND029", color:"VERDE" },
				{subca:"AND030", color:"VERDE" },
				{subca:"AND031", color:"VERDE" },
				{subca:"AND032", color:"VERDE" },
				{subca:"AND033", color:"VERDE" },
				{subca:"AND034", color:"VERDE" },
				{subca:"AND035", color:"VERDE" },
				{subca:"AND040", color:"VERDE" },
				{subca:"SSJ1", color:"VERDE" },
				{subca:"SVE1", color:"VERDE" },
				{subca:"SLU1", color:"VERDE" },
				{subca:"SME1", color:"VERDE" },
				{subca:"COR140", color:"VERDE" },
				{subca:"COR141", color:"VERDE" },
				{subca:"OCA290", color:"VERDE" },
				{subca:"OCA291", color:"VERDE" },
				{subca:"URB190", color:"VERDE" },
				{subca:"PCK390", color:"VERDE" },
				{subca:"OCS090", color:"VERDE" }]

const zonas = [zonaA, zonaB, zonaC, zonaD];

const puntajeTotal = (zonas[0].length + zonas[1].length + zonas[2].length + zonas[3].length);
let contadorIntentos = 0;
let contadorAciertos = 0;
//Puntaje de 100 por defecto al responder por primera vez.
let puntajeCorrecto = 100;

//Contador de puntos.
let sumatoriaPuntaje = 0;

let validarColores = false;
let porcentajeTotal;
function restarPuntos(){
	puntajeCorrecto -=25;
	contadorIntentos++;
}

function sumatoriaPuntos(num){
	if(num == 100){
		contadorAciertos++;
	}
	sumatoriaPuntaje += num;
}

//Variable global que guarda la posición en el que se encuentra el objeto del array;
let numero;
let inicio = new mezcladorSubca();




//poner la primer subca.
const etiqueta1 = document.getElementById("subca");
let crearEtiqueta = document.createElement('h1');
crearEtiqueta.id = "etiqueta";
crearEtiqueta.classList.add(inicio.color);
crearEtiqueta.setAttribute("value",inicio.color);
crearEtiqueta.setAttribute("alt", inicio.subca);
crearEtiqueta.textContent = inicio.subca;
etiqueta1.appendChild(crearEtiqueta);


//desactiva las funciones que están como atributo en los botones de HTML.
function finalizar(){
	const tablaDePuntos = document.querySelector("body");
	let posiciones = document.getElementById("grid");
	tablaDePuntos.removeChild(posiciones);
	console.log(sumatoriaPuntaje);
	porcentajeTotal = Math.floor(sumatoriaPuntaje/puntajeTotal);
	console.log((porcentajeTotal) + "%");
	crearTablaDeEstadisticasUno();
}

function crearTablaDeEstadisticasUno(){
	const tablero = document.createElement('div');
	tablero.id = "tablero";
	tablero.classList= "final";
	const contenedor = document.createElement('div');
	const titulo = document.createElement('h2');
	const porcentaje = document.createElement('h1');
	const columna = document.createElement('h2');

	contenedor.classList= "contenedor";
	titulo.textContent = "TOTAL";
	columna.textContent = `Puntos : ${sumatoriaPuntaje}/${puntajeTotal*100}`;

	columna.classList = "font";
	titulo.classList = "font";
	porcentaje.classList = "font";

	porcentaje.textContent = porcentajeTotal + "%";

	const linea = document.createElement('hr');
	linea.setAttribute("width","80%");
	linea.setAttribute("align", "center")

	contenedor.appendChild(titulo);
	contenedor.appendChild(porcentaje);
	contenedor.appendChild(columna);
	tablero.appendChild(contenedor);
	
	const contadores = document.createElement('div');
	contadores.classList= "final";
	const intentos = document.createElement('p');
	const aciertos = document.createElement('p');
	if(contadorIntentos == 1){
		intentos.innerHTML = `<b>Intentos : </b>    ${contadorIntentos} vez`;
	} else {
		intentos.innerHTML = `<b>Intentos : </b>    ${contadorIntentos} veces`;
	}
	if(contadorAciertos == 1){
		aciertos.innerHTML = `<b>Aciertos : </b>    ${contadorAciertos} vez`;
	} else {
		aciertos.innerHTML = `<b>Aciertos : </b>    ${contadorAciertos} veces`;
	}
	
	intentos.classList = "font";
	aciertos.classList = "font";
	aciertos.setAttribute("margin-bottom","-20px");
	contadores.appendChild(aciertos);
	contadores.appendChild(intentos);
	

	document.body.appendChild(tablero);
	document.body.appendChild(linea);
	document.body.appendChild(contadores);
}



//borro la etiqueta H1 de subcas y creo una etiqueta H3 de felicitaciones.
function felicitar(){
	const mensaje = document.getElementById("subca");
	const borrarEtiqueta = document.getElementById("etiqueta");
	mensaje.removeChild(borrarEtiqueta);
	let crearEtiqueta = document.createElement('h3');
	if(porcentajeTotal >= 70){
		crearEtiqueta.textContent= "¡¡FELICIDADES!!";
	} else {
		crearEtiqueta.textContent= "¡A seguir mejorando!";
	}
	crearEtiqueta.id = "etiqueta";
	crearEtiqueta.classList = "feliz";
	mensaje.appendChild(crearEtiqueta);
}

//Retorna una nueva subca.
function mezcladorSubca(){
//función que retorna un número random.
var num = (longitud) => Math.floor(Math.random()*longitud);

let trueFalseInicio;
let trueFalseFinal = false;
let zonaNum;

//Si en el array de cualquier zona se quedó vacía, elije otra zona.
do{
	trueFalseInicio = false;
	zonaNum = zonas[num(zonas.length)];
	if(zonaNum.length == 0){
		trueFalseInicio = true;
		//si todos los array de zonas se quedaron sin elementos, termina el programa.
		if((zonaA.length == 0) && (zonaB.length == 0) && (zonaC.length == 0) && (zonaD.length == 0) ){
			trueFalseFinal = true;
			validarColores = true;
			finalizar();
			felicitar();
			
			break;
		}
	}
}
while(trueFalseInicio);
console.log(puntajeCorrecto);
if(trueFalseFinal == false){
//una subca de la zona.
let numSubca = num(zonaNum.length);
numero = numSubca;
let letraColor = zonaNum[numSubca].color;
let letra = zonaNum[numSubca].subca;
this.subca = letra
this.color = letraColor;
}

}



//cambiar a otra posición de subcas.
function cambiar(){
	const cambiarEtiqueta =	document.getElementById("etiqueta");
	remover(cambiarEtiqueta);
	let subcaNueva = new mezcladorSubca();
	cambiarEtiqueta.setAttribute("class", subcaNueva.color);
	cambiarEtiqueta.setAttribute("value", subcaNueva.color);
	crearEtiqueta.setAttribute("alt", subcaNueva.subca);
	cambiarEtiqueta.textContent = subcaNueva.subca;
}

//Encontrar de que zona es la posición de subca, para así removerlo.
function remover(cambiarEtiqueta){
	let subcaCambiar = cambiarEtiqueta.getAttribute("alt");
	let colorCambiar = cambiarEtiqueta.getAttribute("value");
	switch(colorCambiar){
		case "ROJO": eliminar(subcaCambiar, 0, colorCambiar);
					break;
		case "AMARILLO": eliminar(subcaCambiar, 1, colorCambiar);
					break;
		case "AZUL": eliminar(subcaCambiar, 2, colorCambiar);
					break;
		case "VERDE": eliminar(subcaCambiar, 3, colorCambiar);
					break;
	}
}

//Del array de tal zona, eliminará la posición de subca.
function eliminar(eliminarSubca, posicion, colorRemover){
	const objetoEliminar = {subca: eliminarSubca, color: colorRemover};
	(zonas[posicion]).splice(numero,1);
}

function cambiarColor(boton){
	let color = document.getElementById(""+boton);
	color.setAttribute("class", "gris div");
}

function resetearAtributos(){
	const zonaA = document.getElementById("botonA");
	zonaA.setAttribute("class", "ROJO div")
	zonaA.setAttribute("onclick", "validarA()")
	const zonaB = document.getElementById("botonB");
	zonaB.setAttribute("class", "AMARILLO div")
	zonaB.setAttribute("onclick", "validarB()")
	const zonaC = document.getElementById("botonC");
	zonaC.setAttribute("class", "AZUL div")
	zonaC.setAttribute("onclick", "validarC()")
	const zonaD = document.getElementById("botonD");
	zonaD.setAttribute("class", "VERDE div")
	zonaD.setAttribute("onclick", "validarD()")
	puntajeCorrecto =100;
}

function sacarOnClick(color){
	const zonaA = document.getElementById(color);
	zonaA.removeAttribute("onclick");

}

function juegoTrueFalse(){
	if(validarColores == false){
		resetearAtributos();
	}
}

//Funciones que validan si las posición de subca en pantalla es igual al color donde hagamos click.
function validarA(){
	let colorSubca =String(document.getElementById("etiqueta").getAttribute("value"));
	if("ROJO" == colorSubca){
		console.log(`El color de zona es ${colorSubca}`);
		console.log("CORRECTO");
		sumatoriaPuntos(puntajeCorrecto);
		cambiar();
		juegoTrueFalse()
	} else {
		restarPuntos();
		cambiarColor("botonA");
		console.log(`El color de zona NO es ROJO`);
		console.log("INCORRECTO");
		sacarOnClick("botonA");
	}
}

function validarB(){
	let colorSubca =String(document.getElementById("etiqueta").getAttribute("value"));
	if("AMARILLO" == colorSubca){
		console.log(`El color de zona es ${colorSubca}`);
		console.log("CORRECTO");
		sumatoriaPuntos(puntajeCorrecto);
		cambiar();
		juegoTrueFalse();
	} else {
		restarPuntos();
		cambiarColor("botonB");
		console.log(`El color de zona NO es AMARILLO`);
		console.log("INCORRECTO");
		sacarOnClick("botonB");
	}
}

function validarC(){
	let colorSubca =String(document.getElementById("etiqueta").getAttribute("value"));
	
	if("AZUL" == colorSubca){
		console.log(`El color de zona es ${colorSubca}`);
		console.log("CORRECTO");
		sumatoriaPuntos(puntajeCorrecto);
		cambiar();
		juegoTrueFalse();
	} else {
		restarPuntos();
		cambiarColor("botonC");
		console.log(`El color de zona NO es AZUL`);
		console.log("INCORRECTO");
		sacarOnClick("botonC");
	}
}

function validarD(){
	let colorSubca =String(document.getElementById("etiqueta").getAttribute("value"));
	if("VERDE" == colorSubca){
		console.log(`El color de zona es ${colorSubca}`);
		console.log("CORRECTO");
		sumatoriaPuntos(puntajeCorrecto);
		cambiar();
		juegoTrueFalse();
	} else {
		restarPuntos();
		cambiarColor("botonD");
		console.log(`El color de zona NO es VERDE`);
		console.log("INCORRECTO");
		sacarOnClick("botonD");
	}
}
