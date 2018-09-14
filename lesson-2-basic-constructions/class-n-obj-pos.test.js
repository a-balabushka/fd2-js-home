describe('Topics 3.25, 3.40, 3.55', function () {
  var a = 2;
  var b = 4;
  describe('Pre-created object Math', function () {
    it('Constant value PI. Result must be more than 3', function () {
      expect(Math.PI).toBeGreaterThan(3);
    });
    it('Modul a. a must be more than 0', function () {
      expect(Math.abs(-a)).toBeGreaterThan(0);
    });
    it('The greatest value of a or b. b greatest a', function () {
      expect(Math.max(a, b)).toBe(4);
    });
    it('The greatest value of a or b. a less b', function () {
      expect(Math.min(a, b)).toBe(2);
    });
    it('Returns a value rounded to the nearest whole number', function () {
      expect(Math.round(4.7)).toBe(5);
    });
    it('Returns a value, rounding up to an integer', function () {
      expect(Math.ceil(4.2)).toBe(5);
    });
    it('Returns a value rounded down to an integer', function () {
      expect(Math.floor(4.2)).toBe(4);
    });
    it('Random number from 0 to 1. Result must be more than 0', function () {
      expect(Math.random()).toBeGreaterThan(0);
    });
    it('Sine of an angle', function () {
      expect(Math.sin(Math.PI / 2)).toBe(1);
    });
    it('Cosine of the angle', function () {
      expect(Math.cos(Math.PI)).toBe(-1);
    });
    it('Angle tangent', function () {
      expect(Math.tan(Math.PI / 2)).toBe(16331239353195370);
    });
  });
  describe('The prescribed class String', function () {
    var c = 'Утром деньги, вечером стулья!';
    it('Returns the length of the string. Result should be equals 29', function () {
      expect(c.length).toBe(29);
    });
    it('Returns the length of the string. Result should be equals 29', function () {
      expect(c.length).toBe(29);
    });
    it('Returns a symbol at the specified index of the string', function () {
      expect(c.charAt(2)).toBe('р');
    });
    it('Returns a symbol at the specified index of the string', function () {
      expect(c[2]).toBe('р');
    });
    it('Returns a substring from the specified start index to the end of the string', function () {
      expect(c.substr(14)).toBe('вечером стулья!');
    });
    it('Returns a substring from the specified start index to the end of the string', function () {
      expect(c.slice(14)).toBe('вечером стулья!');
    });
    it('Breaks the string into substrings using the specified delimiter', function () {
      expect(c.split(' ')).toBe(['Утром', 'деньги,', 'вечером', 'стулья!']);
    });
  });
});
