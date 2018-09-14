describe('Topics 1.40, 1.45, 1.60, 1.62', function () {
  var a = 2;
  var b = 4;
  describe('Arithmetic operations', function () {
    it('The sum of a and b should be equals 6', function () {
      expect(a + b).toBe(6);
    });
    it('Substruction of a and b. Result must be less than 0', function () {
      expect(a - b).toBeLessThan(0);
    });
    it('Multiplication of a and b. Result must be more than 5', function () {
      expect(a * b).toBeGreaterThan(5);
    });
    it('The division of a and b should be equals 0.5', function () {
      expect(a / b).toBe(0.5);
    });
    it('Division by modulus', function () {
      expect(a % b).toBe(2);
    });
    it('Changing sign. a must be more than 0', function () {
      expect(-a).toBeLessThanOrEqual(0);
    });
    it('Predecrement. a must be equals to 1', function () {
      expect(--a).toBe(1);
    });
    it('Preincrement. a must be equals to 2', function () {
      expect(++a).toBe(2);
    });
    it('Post-difference. a must be equals to 2', function () {
      expect(a--).toBe(2);
    });
    it('Post-increment. a must be equals to 2', function () {
      expect(a++).toBe(1);
    });
    it('Assignment with addition. b must be equals to 6', function () {
      expect(b += 2).toBe(6);
    });
    it('Assignment with subtraction. b must be equals to 2', function () {
      expect(b -= 2).toBe(4);
    });
    it('Assignment with multiplication. b must be equals to 8', function () {
      expect(b *= 2).toBe(8);
    });
    it('Assignment with division. b must be equals to 2', function () {
      expect(b /= 2).toBe(4);
    });
    it('String operation. Concatenation', function () {
      var c = 'машина';
      expect('кофе' + c).toBe('кофемашина');
    });
    it('String operation. Assignment with concatenation', function () {
      var d = 'перекати';
      expect(d += 'поле').toBe('перекатиполе');
    });
  });
  describe('Comparison operations', function () {
    it('Operator >. b should be greater a', function () {
      expect(b > a).toBeTruthy();
    });

    it('Operator <. a should be less b', function () {
      expect(a < b).toBeTruthy();
    });

    it('Operator >=. b should be greater or equals a', function () {
      expect(b >= a).toBeTruthy();
    });

    it('Operator <=. a should be less or equals b', function () {
      expect(a <= b).toBeTruthy();
    });

    it('Operator ==. a should not be equals b (False)', function () {
      expect(a == b).toBeFalsy();
    });

    it('Operator !=. a should not be equals b (True)', function () {
      expect(a != b).toBeTruthy();
    });

    it('Operator ===. a should not be equals b (False)', function () {
      expect(a === b).toBe(false);
    });

    it('Operator !==. a should not be equals b (True)', function () {
      expect(a !== b).toBe(true);
    });
  });
  describe('Logic operations', function () {
    it('Logic operator &&. Result should be equals false.', function () {
      var name = 'Alex';
      var age = 25;
      expect((name == 'Sergey') && (age > 18)).toBeFalsy();
    });

    it('Logic operator ||. Result should be equals true.', function () {
      var distance = 2000;
      var suma = 700;
      expect((distance < 1000) || (suma > 500)).toBeTruthy();
    });

    it('Logic operator !. Result should be equals false.', function () {
      var temperature = 35;
      var zharko = (temperature > 30);
      expect(!zharko).toBeFalsy();
    });
  });
});
