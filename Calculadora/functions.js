//innerHTML es un método que nos devuelve lo que hay dentro de un elemento.
let p1 = document.getElementById('historial');
let p2 = document.getElementById('resultado');

let calculadora = document.getElementById('calculadora');

function concatenar(varstring){
	p1.innerHTML += varstring;
	calcular();
}

function calcular(){
	p2.innerHTML = eval(p1.innerHTML);
}

function borrar(){
	p1.innerHTML = "";
	p2.innerHTML = "";
}

function resultado(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = "";
}

function claro(){
	calculadora.classList.remove('fondo1');
	calculadora.classList.add('fondo4');
	pantalla.classList.remove('fondo1');
	pantalla.classList.add('fondo4');

	let boton = document.querySelectorAll('.buttons');
	let t = boton.length;
	for(i = t-1; i>0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('#sun').classList.add('activo');
	document.querySelector('#moon').classList.remove('activo');
	document.querySelector('#teclado').classList.remove('fondo2');
	document.querySelector('#teclado').classList.add('medio');
	document.querySelector('#lightmode').classList.remove('fondo2');
	document.querySelector('#lightmode').classList.add('medio');

	let operador = document.querySelectorAll('.operadores');
	let t2 = operador.length;
	for(i = t2-1; i>=0; i--){
		operador[i].classList.remove('fondo3');
		operador[i].classList.add('fuerte');
	}
}

function oscuro(){
	calculadora.classList.remove('fondo4');
	calculadora.classList.add('fondo1');
	pantalla.classList.remove('fondo4');
	pantalla.classList.add('fondo1');

	let boton = document.querySelectorAll('.buttons');
	let t = boton.length;
	for(i = t-1; i>0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('#sun').classList.remove('activo');
	document.querySelector('#moon').classList.add('activo');
	document.querySelector('#teclado').classList.add('fondo2');
	document.querySelector('#teclado').classList.remove('medio');
	document.querySelector('#lightmode').classList.add('fondo2');
	document.querySelector('#lightmode').classList.remove('medio');

	let operador = document.querySelectorAll('.operadores');
	let t2 = operador.length;
	for(i = t2-1; i>=0; i--){
		operador[i].classList.remove('fuerte');
		operador[i].classList.add('fondo3');
	}
}