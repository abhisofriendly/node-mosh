const lib = require('../lib');

// describe('absolute', () => {
//   it('should return a positive number if input is positive', () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
//   });

//   it('should return a positive number if the input is negative', () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
//   });

//   it('should return 0 if input is 0', () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
//   });
// });

// string testing
// describe('greet', () => {
//   it('should return the greeting function', () => {
//     const result = lib.greet('mosh');
//     expect(result).toMatch(/mosh/);
//     expect(result).toContain('mosh');
//   });
// });

// testing arrays
describe('getCurrencies', () => {
  it('should return currencies', () => {
    const result = lib.getCurrencies();
    expect(result).not.toBeNull();
  });
});
