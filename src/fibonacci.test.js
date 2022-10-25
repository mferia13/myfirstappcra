import {calcularSeedsandSeconds, calcularSerie} from './fibonacci.js';

test('Calcula semillas y segundos con fecha de entrada 2022-10-03 09:30:05', () => {
    let fechaTest = new Date(Date.UTC(2022, 10, 3, 9, 30, 5));
    let arrayOriginal = calcularSeedsandSeconds(fechaTest);
    let lastElement = arrayOriginal.pop();
    console.log(`Se extrae la fecha del array de pruebas: ${lastElement}`);
    expect(arrayOriginal).toEqual([0,5,5]);
  });

test('Calcula serie dadas las semillas 0, 3 y los segundos 3w', () => {
    expect(calcularSerie(0, 3, 3)).toStrictEqual([0, 3, 3, 6, 9]);
  });