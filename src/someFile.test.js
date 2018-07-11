const {add} = require('./someFile.js');

describe('someFile', () => {
  describe('add', () => {
    it('should return the correct value', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 1)).toBe(0);
    });
  });
});
