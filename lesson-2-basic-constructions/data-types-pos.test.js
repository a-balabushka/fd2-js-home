describe('Six types of data', function () {
  var a = 1;
  var b = null;
  it('Check for a type Number', function () {
    expect(typeof (a)).toBeTruthy();
  });
  it('Check for an Infinity', function () {
    expect(a / 0).toBe(Infinity);
  });
  it('Check for a NaN', function () {
    expect(a / 'notNumber').toBe(NaN);
  });
  it('Check for a String', function () {
    expect(typeof ('not' + 'Number')).toBe('string');
  });
  it('Check for a Boolean', function () {
    var d = false;
    expect(d).toBeFalsy();
  });
  it('Check for a Null', function () {
    expect(b).toBeNull();
  });
  it('Check for an Undefined', function () {
    var c = 123;
    c = undefined;
    expect(c).toBeUndefined();
  });
  it('Check for a Object', function () {
    var o = {name: 'Alex', year: 21};
    o.name = 'Aliaksei';
    expect(o).toEqual({name: 'Aliaksei', year: 21});
  });
});