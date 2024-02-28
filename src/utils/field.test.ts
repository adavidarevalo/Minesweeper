import { emptyFieldGenerator, CellState, fieldGenerator } from './field';

const { empty, bomb } = CellState;

describe('Field Generator', () => {
  describe('generates an empty field', () => {
    it('2x2', () => {
      const fieldGeneratorResult = emptyFieldGenerator(2);

      expect(fieldGeneratorResult).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it('3x3', () => {
      const fieldGeneratorResult = emptyFieldGenerator(3);

      expect(fieldGeneratorResult).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });
    it('4x4', () => {
      const fieldGeneratorResult = emptyFieldGenerator(4);

      expect(fieldGeneratorResult).toStrictEqual([
        [empty, empty, empty, empty],
        [empty, empty, empty, empty],
        [empty, empty, empty, empty],
        [empty, empty, empty, empty],
      ]);
    });
  });
  describe('Simple Cases', () => {
    it('Wrong density', () => {
      const errorText = 'Probability must be between 0 and 1';

      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });
    it('Smallest possible field, without mine', () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });
    it('Big field without mine', () => {
      expect(fieldGenerator(10, 0)).toStrictEqual([
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ]);
    });
    it('Smallest possible field, with mine', () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });
    it('2x2 field with mines', () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });
    it('2x2 field with 50% percent', () => {
      const field = fieldGenerator(2, 0.5);
      const flatField = field.flat();

      const cellWithBombs = flatField.filter((cell) => cell === bomb);
      const emptyCells = flatField.filter((cell) => cell === empty);

      expect(cellWithBombs).toHaveLength(2);
      expect(emptyCells).toHaveLength(2);
    });
  });
});
