import Suma from './Suma';

test('adds 1 + 2 to equal 3', () => {
  expect(Suma(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(Suma(2, 2)).toBe(4);
});