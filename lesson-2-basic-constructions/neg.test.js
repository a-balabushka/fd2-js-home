describe('***Negative tests***', function () {
  describe('First paragraph', function () {
    describe('Six types of data', function () {
      var q = 1;
      var w = null;
      it('Check for a type Number', function () {
        expect(typeof ('one')).toBe('number');
      });
      it('Check for an Infinity', function () {
        expect(q / 0.1).toBe(Infinity);
      });
      it('Check for a NaN', function () {
        expect(q / +'2').toBe(NaN);
      });
      it('Check for a String', function () {
        expect(typeof ('2' * q)).toBe('string');
      });
      it('Check for a Boolean', function () {
        expect(q).toBeFalsy();
      });
      it('Check for a Null', function () {
        expect(w + 1).toBeNull();
      });
      it('Check for an Undefined', function () {
        var t = undefined;
        t = 123;
        expect(t).toBeUndefined();
      });
      it('Check for a Object', function () {
        expect(q).toEqual({name: 'Aliaksei', year: 21});
      });
    });
    describe('Comparison of types', function () {
      it('NaN should be equal to NaN', function () {
        expect(NaN === NaN).toBeTruthy();
      });
      it('NaN should be equal to Undefined', function () {
        expect(NaN === undefined).toBeTruthy();
      });
      it('NaN should be equal to Null', function () {
        expect(NaN === null).toBeTruthy();
      });
      it('Undefined should\'t be equal to Undefined', function () {
        expect(undefined === undefined).toBeFalsy();
      });
      it('Undefined should be equal to Null', function () {
        expect(undefined === null).toBeTruthy();
      });
      it('Null should\'t be equal to Null', function () {
        expect(null === null).toBeFalsy();
      });
    });
  });
   describe('Second paragraph. Topics 1.40, 1.45, 1.60, 1.62', function () {
    var a = 2;
    var b = 4;
    describe('Arithmetic operations', function () {
      it('The sum of a and b should be equals 6', function () {
        expect(a + b).toBe(5);
      });
      it('Substruction of a and b. Result must be less than 0', function () {
        expect(b - a).toBeLessThan(0);
      });
      it('Multiplication of a and b. Result must be more than 5', function () {
        expect(a * b).toBeGreaterThan(10);
      });
      it('The division of a and b should be equals 0.5', function () {
        expect(b / a).toBe(0.5);
      });
      it('Division by modulus', function () {
        expect(b % a).toBe(2);
      });
      it('Changing sign. a must be more than 0', function () {
        expect(-a).toBeGreaterThan(0);
      });
      it('Predecrement. a must be equals to 2', function () {
        expect(--a).toBe(2);
      });
      it('Preincrement. a must be equals to 3', function () {
        expect(++a).toBe(3);
      });
      it('Post-difference. a must be equals to 1', function () {
        expect(a--).toBe(1);
      });
      it('Post-increment. a must be equals to 2', function () {
        expect(a++).toBe(2);
      });
      it('Assignment with addition. b must be equals to 8', function () {
        expect(b += 2).toBe(8);
      });
      it('Assignment with subtraction. b must be equals to 6', function () {
        expect(b -= 2).toBe(6);
      });
      it('Assignment with multiplication. b must be equals to 16', function () {
        expect(b *= 2).toBe(16);
      });
      it('Assignment with division. b must be equals to 4', function () {
        expect(b /= 2).toBe(3);
      });
    });
    describe('String operation', function () {
      it('String operation. Concatenation', function () {
        var c = 'машина';
        expect(c + 'кофе').toBe('кофемашина');
      });
      it('String operation. Assignment with concatenation', function () {
        var d = 'перекати';
        expect(d += 'поле!').toBe('перекатиполе');
      });
    });
    describe('Comparison operations', function () {
      it('Operator >. a should be less b', function () {
        expect(a > b).toBeTruthy();
      });

      it('Operator <. b should be greater a', function () {
        expect(b < a).toBeTruthy();
      });

      it('Operator >=. a should be less or equals b', function () {
        expect(a >= b).toBeTruthy();
      });

      it('Operator <=. b should be greater or equals a', function () {
        expect(b <= a).toBeTruthy();
      });

      it('Operator ==. a should be equals b', function () {
        expect(a == b).toBeTruthy();
      });

      it('Operator !=. a should be equals b', function () {
        expect(a != b).toBeFalsy();
      });

      it('Operator ===. a should be equals b (False)', function () {
        expect(a === b).toBe(true);
      });

      it('Operator !==. a should not be equals a', function () {
        expect(a !== a).toBe(true);
      });
    });
    describe('Logic operations', function () {
      it('Logic operator &&. Result should be equals true.', function () {
        var name = 'Alex';
        var age = 25;
        expect((name == 'Sergey') && (age > 18)).toBeTruthy();
      });

      it('Logic operator ||. Result should be equals false.', function () {
        var distance = 2000;
        var suma = 700;
        expect((distance < 1000) || (suma > 500)).toBeFalsy();
      });

      it('Logic operator !. Result should be equals true.', function () {
        var temperature = 35;
        var zharko = (temperature > 30);
        expect(!zharko).toBeTruthy();
      });
    });
    describe('Type conversion and result checking', function () {
      var c = '-3.8';
      it('Converting a string to an integer. c should be equals -3.8', function () {
        expect(parseInt(c, 0)).toBe(-3.8);
      });
      it('Converting a string to a fractional number. c should be equals -3', function () {
        expect(parseFloat(c)).toBe(-3);
      });
      it('Converting a string to a fractional number. d should be equals -4', function () {
        var d = '-4.8';
        expect(Number(d)).toBe(-4);
      });
      it('Converting a string to a fractional number by using any operation. f should be equals 24.6', function () {
        var f = '12 point 3';
        expect(f * 2).toBe(24.6);
      });
      it('Checks if a numeric argument is equal to the constant NaN', function () {
        var g = '55';
        expect(isNaN(g)).toBeTruthy();
      });
      it('Checks if the numeric argument is a finite number', function () {
        var h = '7m';
        expect(isFinite(h)).toBeTruthy();
      });
      var e = 6;
      it('Convert a value from a number to a string (function String())', function () {
        expect(String(Math.PI)).toBe('3.14');
      });
      it('Convert a value from a number to a string (method e.toString())', function () {
        expect(+e.toString()).toBe('6');
      });
      it('Convert a value from a number to a string (bonding with an empty string)', function () {
        expect('' + Math.PI).toBe('3.14');
      });
      it('Converts a value to a boolean value (function Boolean())', function () {
        expect(Boolean(e)).toBeFalsy();
      });
      it('Converts a value to a boolean value (twice no)', function () {
        expect(!!e).toBeFalsy();
      });
    });
  });
  describe('Third paragraph. Topics 3.25, 3.40, 3.55', function () {
    var x = 2;
    var y = 4;
    describe('Pre-created object Math', function () {
      it('Constant value PI. Result must be more than 3.15', function () {
        expect(Math.PI).toBeGreaterThan(3.15);
      });
      it('Modul x. x must be less than 0', function () {
        expect(Math.abs(-x)).toBeLessThan(0);
      });
      it('The greatest value of x or y. x greatest y', function () {
        expect(Math.max(x, y)).toBe(2);
      });
      it('The greatest value of x or y. y less x', function () {
        expect(Math.min(x, y)).toBe(4);
      });
      it('Returns a value rounding down to an number', function () {
        expect(Math.round(4.7)).toBe(4);
      });
      it('Returns a value, rounding down to an integer', function () {
        expect(Math.ceil(4.2)).toBe(4);
      });
      it('Returns a value rounded up to an integer', function () {
        expect(Math.floor(4.2)).toBe(5);
      });
      it('Random number from 0 to 1. Result must be more than 1', function () {
        expect(Math.random()).toBeGreaterThan(1);
      });
      it('Sine of an angle', function () {
        expect(Math.sin(Math.PI / 2)).toBe(0);
      });
      it('Cosine of the angle', function () {
        expect(Math.cos(Math.PI)).toBe(0);
      });
      it('Angle tangent', function () {
        expect(Math.tan(Math.PI / 2)).toBe(1);
      });
    });
    describe('The prescribed class String', function () {
      var z = 'Утром деньги, вечером стулья!';
      it('Returns the length of the string. Result should be equals 28', function () {
        expect(z.length).toBe(28);
      });
      it('Returns a symbol at the specified index of the string', function () {
        expect(z.charAt(2)).toBe('т');
      });
      it('Returns a symbol at the specified index of the string', function () {
        expect(z[2]).toBe('т');
      });
      it('Returns a substring from the specified start index to the end of the string', function () {
        expect(z.substr(14)).toBe(' вечером стулья');
      });
      it('Returns a substring from the specified start index to the end of the string', function () {
        expect(z.slice(14)).toBe(' вечером стулья');
      });
      it('Breaks the string into substrings using the specified delimiter', function () {
        expect(z.split(',')).toEqual(['Утром деньги', 'вечером стулья!']);
      });
      it('Сonverts a string to LOWERCASE', function () {
        expect(z.toLowerCase()).toBe('УТРОМ ДЕНЬГИ, ВЕЧЕРОМ СТУЛЬЯ!');
      });
      it('Converts a string to uppercase', function () {
        expect(z.toUpperCase()).toBe('утром деньги, вечером стулья!');
      });
      it('The position of the found substring in the string', function () {
        expect(z.indexOf('о')).toBe(4);
      });
      it('The position of the found substring in the string (from the end)', function () {
        expect(z.lastIndexOf('о')).toBe(20);
      });
      it('Кeplaces the old substring with a new one', function () {
        expect(z.replace('стулья', 'деньги')).toEqual('Утром стулья, вечером стулья!');
      });
      it('Removes all whitespace', function () {
        var l = '\n\r\t\v Hi! \n\r\t\v'
        expect(l.trim()).toEqual('Hi');
      });
    });
    describe('Prescribed Array class', function () {
      var Arr = ['Opel', 'BMW'];
      var Arr2 = ['A', 'B', 'C', 'D', 'E'];
      it('Returns the length of the array. Result should be equals 1', function () {
        expect(Arr.length).toBe(1);
      });
      it('The method connects two arrays', function () {
        var Arr3 = ['VW', 'Rimac'];
        expect(Arr.concat(Arr3)).toEqual(['VW', 'Rimac', 'Opel', 'BMW']);
      });
      it('Method add an element to the end of the array', function () {
        expect(Arr.push('MB', 'Audi')).toEqual(6);
      });
      it('Method remove an element to the end of the array', function () {
        expect(Arr.pop()).toEqual('VW');
      });
      it('Method add an element to the beginning of the array', function () {
        expect(Arr.unshift('MB')).toEqual(5);
      });
      it('Method remove an element to the beginning of the array', function () {
        expect(Arr.shift()).toEqual('BMW');
      });
      it('The method returns the part of the array from the specified element and to the end element', function () {
        expect(Arr2.slice(1, 4)).toEqual(['B', 'C', 'D', 'E']);
      });
      it('Deletes the specified number of items starting at the specified start position', function () {
        expect(Arr2.splice(2, 2)).toEqual(['C', 'D', 'E']);
      });
      it('Changes the order of the elements to the reverse', function () {
        expect(Arr.reverse()).toEqual(['BMW', 'MB', 'Opel']);
      });
      it('Sorted items as strings', function () {
        expect(Arr.sort()).toEqual(['Opel', 'BMW', 'MB']);
      });
    });
  });
});