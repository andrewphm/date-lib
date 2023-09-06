import D from '../src/index';

describe('D class', () => {
  let d: D;

  beforeEach(() => {
    // Initialize a new D object before each test
    d = new D('2022-01-01T00:00:00');
  });

  test('constructor with no arguments', () => {
    const d = new D();
    expect(d.year).toBe(new Date().getFullYear());
  });

  test('construtor with string argument', () => {
    const d = new D('2022-01-01T00:00:00');
    expect(d.year).toBe(2022);
  });

  test('year getter', () => {
    expect(d.year).toBe(2022);
  });

  test('yr getter', () => {
    expect(d.yr).toBe(22);
  });

  test('month getter', () => {
    expect(d.month).toBe('January');
  });

  test('mon getter', () => {
    expect(d.mon).toBe('Jan');
  });

  test('day getter', () => {
    expect(d.day).toBe('Saturday');
  });

  test('dy getter', () => {
    expect(d.dy).toBe('Sat');
  });

  test('date getter', () => {
    expect(d.date).toBe(1);
  });

  test('hours getter', () => {
    expect(d.hours).toBe(0);
  });

  test('mins getter', () => {
    expect(d.mins).toBe(0);
  });

  test('secs getter', () => {
    expect(d.secs).toBe(0);
  });

  test('ordinal getter', () => {
    expect(d.ordinal).toBe('1st');
  });

  test('format method', () => {
    expect(d.format('Y-M-D')).toBe('2022-January-01');
    expect(d.format('y-m-d')).toBe('22-Jan-1');
    expect(d.format('H:I:S')).toBe('00:00:00');
    expect(d.format('h:i:s')).toBe('0:0:0');
    expect(d.format('#')).toBe('1st');
  });

  test('when method', () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const yesterday = new D(today);

    expect(yesterday.when()).toBe('1 day ago');
  });

  test('when returns today when date is today', () => {
    const today = new Date();
    const d = new D(today);

    expect(d.when()).toBe('today');
  });
});
