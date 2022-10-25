function run(f){
	let seedsSecondsandDate = calcularSeedsandSeconds(f); 
	let serieFibo = calcularSerie(seedsSecondsandDate[0], seedsSecondsandDate[1],seedsSecondsandDate[2]);
	imprimirSeedsandSerie(seedsSecondsandDate, serieFibo);
}

function calcularSeedsandSeconds(fechaInput){
	let fecha = fechaInput;
	let segundosNumero = fecha.getSeconds();
	let segundosString = segundosNumero.toString();
	let seed1, seed2;

	if (segundosString[1] === undefined){
		seed1 = 0;
		seed2 = parseInt(segundosString[0]);
	}else{
		seed1 = parseInt(segundosString[0]);
		seed2 = parseInt(segundosString[1]);
	}
	console.log(`Se calcularon las semillas correctamente.`);
	return [seed1, seed2, segundosNumero, fecha];
}

function calcularSerie(seed1, seed2, segundosNumero){
	let aux1 = 2;
	let serieFibonacci = [];
	serieFibonacci[0] = seed1;
	serieFibonacci[1] = seed2;

	for(let i= 0; i < segundosNumero; i++){
		serieFibonacci[aux1] = seed1 + seed2;
		seed1 = seed2;
		seed2 = serieFibonacci[aux1];
		aux1++;
	}
	console.log('Se calculó la serie de fibonacci correctamente.')
	return serieFibonacci;
}

function imprimirSeedsandSerie(seedsSecondsandDate,serieFibonacci){
	const pSeedsAndDate = document.getElementById('seedsAndDate');

	pSeedsAndDate.innerHTML = `
	Segundos: ${seedsSecondsandDate[2]}<br>
	Semilla 1: ${seedsSecondsandDate[0]}<br>
	Semilla 2: ${seedsSecondsandDate[1]}<br>
	Serie de Fibonanni: ${serieFibonacci}.<br>`;
	console.log(`Se imprimió la fecha, segundos, semillas y serie de fibonacci.`);
}

export {run, calcularSeedsandSeconds, calcularSerie};
