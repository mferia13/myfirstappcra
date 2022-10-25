import calcularAnchoyAltoImagen from './calcularAnchoyAltoImagen';

test('Imagen no requiere modificacion', () => {
  expect(calcularAnchoyAltoImagen(2400,3500)).toEqual([2400,3500]);
});

test('Imagen requiere reducir ancho', () => {
  expect(calcularAnchoyAltoImagen(2600,3000)).toEqual([2480,3000]);
});

test('Imagen requiere reducir alto', () => {
    expect(calcularAnchoyAltoImagen(2300,3800)).toEqual([2300,3508]);
  });

  test('Imagen requiere reducir ancho y alto', () => {
    expect(calcularAnchoyAltoImagen(2600,6000)).toEqual([2480,3508]);
  });

  test('Imagen no requiere modificacion', () => {
    expect(calcularAnchoyAltoImagen(2480,3508)).toEqual([2480,3508]);
  });