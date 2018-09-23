describe('***Positive tests***', function () {
  describe('First paragraph', function () {
    describe('Six types of data', function () {
      var q = 1;
      var w = null;
      it('Check for a type Number', function () {
        expect(typeof (q)).toBeTruthy();
      });
      it('Check for an Infinity', function () {
        expect(q / 0).toBe(Infinity);
      });
      it('Check for a NaN', function () {
        expect(q / 'notNumber').toBe(NaN);
      });
      it('Check for a String', function () {
        expect(typeof ('not' + 'Number')).toBe('string');
      });
      it('Check for a Boolean', function () {
        var r = false;
        expect(r).toBeFalsy();
      });
      it('Check for a Null', function () {
        expect(w).toBeNull();
      });
      it('Check for an Undefined', function () {
        var t = 123;
        t = undefined;
        expect(t).toBeUndefined();
      });
      it('Check for a Object', function () {
        var o = {name: 'Alex', year: 21};
        o.name = 'Aliaksei';
        expect(o).toEqual({name: 'Aliaksei', year: 21});
      });
    });
    describe('Comparison of types', function () {
      it('NaN should\'t be equal to NaN', function () {
        expect(NaN === NaN).toBeFalsy();
      });
      it('NaN should\'t be equal to Undefined', function () {
        expect(NaN === undefined).toBeFalsy();
      });
      it('NaN should\'t be equal to Null', function () {
        expect(NaN === null).toBeFalsy();
      });
      it('Undefined should be equal to Undefined', function () {
        expect(undefined === undefined).toBeTruthy();
      });
      it('Undefined should\'t be equal to Null', function () {
        expect(undefined === null).toBeFalsy();
      });
      it('Null should be equal to Null', function () {
        expect(null === null).toBeTruthy();
      });
    });
  });
  describe('Second paragraph. Topics 1.40, 1.45, 1.60, 1.62', function () {
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
    });
    describe('String operation', function () {
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
    describe('Type conversion and result checking', function () {
      var c = '-3.8';
      it('Converting a string to an integer. c should be equals -3', function () {
        expect(parseInt(c, 0)).toBe(-3);
      });
      it('Converting a string to a fractional number. c should be equals -3.8', function () {
        expect(parseFloat(c)).toBe(-3.8);
      });
      it('Converting a string to a fractional number. d should be equals -4.8', function () {
        var d = '-4.8';
        expect(Number(d)).toBe(-4.8);
      });
      it('Converting a string to a fractional number by using any operation. f should be equals 24.6', function () {
        var f = '12.3';
        expect(f * 2).toBe(24.6);
      });
      it('Checks if a numeric argument is equal to the constant NaN', function () {
        var g = '55s';
        expect(isNaN(g)).toBeTruthy();
      });
      it('Checks if the numeric argument is a finite number', function () {
        var h = '7';
        expect(isFinite(h)).toBeTruthy();
      });
      var e = 6;
      it('Convert a value from a number to a string (function String())', function () {
        expect(String(e)).toBe('6');
      });
      it('Convert a value from a number to a string (method e.toString())', function () {
        expect(e.toString()).toBe('6');
      });
      it('Convert a value from a number to a string (bonding with an empty string)', function () {
        expect(e + '').toBe('6');
      });
      it('Converts a value to a boolean value (function Boolean())', function () {
        expect(Boolean(e)).toBeTruthy();
      });
      it('Converts a value to a boolean value (twice no)', function () {
        expect(!!e).toBeTruthy();
      });
    });
  });
  describe('Third paragraph. Topics 3.25, 3.40, 3.55', function () {
    var x = 2;
    var y = 4;
    describe('Pre-created object Math', function () {
      it('Constant value PI. Result must be more than 3', function () {
        expect(Math.PI).toBeGreaterThan(3);
      });
      it('Modul x. x must be more than 0', function () {
        expect(Math.abs(-x)).toBeGreaterThan(0);
      });
      it('The greatest value of x or y. x greatest y', function () {
        expect(Math.max(x, y)).toBe(4);
      });
      it('The greatest value of x or y. x less y', function () {
        expect(Math.min(x, y)).toBe(2);
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
      var z = 'Утром деньги, вечером стулья!';
      it('Returns the length of the string. Result should be equals 29', function () {
        expect(z.length).toBe(29);
      });
      it('Returns a symbol at the specified index of the string', function () {
        expect(z.charAt(2)).toBe('р');
      });
      it('Returns a symbol at the specified index of the string', function () {
        expect(z[2]).toBe('р');
      });
      it('Returns a substring from the specified start index to the end of the string', function () {
        expect(z.substr(14)).toBe('вечером стулья!');
      });
      it('Returns a substring from the specified start index to the end of the string', function () {
        expect(z.slice(14)).toBe('вечером стулья!');
      });
      it('Breaks the string into substrings using the specified delimiter', function () {
        expect(z.split(',')).toEqual(['Утром деньги', ' вечером стулья!']);
      });
      it('Сonverts a string to LOWERCASE', function () {
        expect(z.toLowerCase()).toBe('утром деньги, вечером стулья!');
      });
      it('Converts a string to uppercase', function () {
        expect(z.toUpperCase()).toBe('УТРОМ ДЕНЬГИ, ВЕЧЕРОМ СТУЛЬЯ!');
      });
      it('The position of the found substring in the string', function () {
        expect(z.indexOf('о')).toBe(3);
      });
      it('The position of the found substring in the string (from the end)', function () {
        expect(z.lastIndexOf('о')).toBe(19);
      });
      it('Кeplaces the old substring with a new one', function () {
        expect(z.replace('стулья', 'деньги')).toEqual('Утром деньги, вечером деньги!');
      });
      it('Removes all whitespace', function () {
        var l = '\n\r\t\v Hi \n\r\t\v'
        expect(l.trim()).toEqual('Hi');
      });
    });
    describe('Prescribed Array class', function () {
      var Arr = ['Opel', 'BMW'];
      var Arr2 = ['A', 'B', 'C', 'D', 'E'];
      it('Returns the length of the array. Result should be equals 2', function () {
        expect(Arr.length).toBe(2);
      });
      it('The method connects two arrays', function () {
        var Arr3 = ['VW', 'Rimac'];
        expect(Arr.concat(Arr3)).toEqual(['Opel', 'BMW', 'VW', 'Rimac']);
      });
      it('Method add an element to the end of the array', function () {
        expect(Arr.push('MB', 'Audi')).toEqual(4);
      });
      it('Method remove an element to the end of the array', function () {
        expect(Arr.pop()).toEqual('Audi');
      });
      it('Method add an element to the beginning of the array', function () {
        expect(Arr.unshift('MB')).toEqual(4);
      });
      it('Method remove an element to the beginning of the array', function () {
        expect(Arr.shift()).toEqual('MB');
      });
      it('The method returns the part of the array from the specified element and to the end element', function () {
        expect(Arr2.slice(1, 4)).toEqual(['B', 'C', 'D']);
      });
      it('Deletes the specified number of items starting at the specified start position', function () {
        expect(Arr2.splice(2, 2)).toEqual(['C', 'D']);
      });
      it('Changes the order of the elements to the reverse', function () {
        expect(Arr.reverse()).toEqual(['MB', 'BMW', 'Opel']);
      });
      it('Sorted items as strings', function () {
        expect(Arr.sort()).toEqual(['BMW', 'MB', 'Opel']);
      });
    });
  });
});