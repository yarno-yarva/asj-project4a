import alive from '../app';

test('alive healthy', () => {
  const characters = { name: 'Маг', health: 90 };
  const result = alive(characters);
  expect(result).toBe('healthy');
});

test('alive wounded', () => {
  const characters = { name: 'Маг', health: 30 };
  const result = alive(characters);
  expect(result).toBe('wounded');
});

test('alive critical', () => {
  const characters = { name: 'Маг', health: 5 };
  const result = alive(characters);
  expect(result).toBe('critical');
});
