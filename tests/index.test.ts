import { D } from '../src/index';

describe('D', () => {
  let d;

  beforeEach(() => {
    d = new D(2017, 8, 2, 3, 4, 5); // September 2, 2017 03:04:05
  });

  it('should return the correct year', () => {
    expect(d.year).toBe(2017);
  });

  it('should return the correct year in short format', () => {
    expect(d.yr).toBe(17);
  });

  it('should return the correct month in long format', () => {
    expect(d.month).toBe('September');
  });

  it('should return the correct month in short format', () => {
    expect(d.mon).toBe('Sep');
  });

  it('should return the correct day of the week in long format', () => {
    expect(d.day).toBe('Saturday');
  });

  it('should return the correct day of the week in short format', () => {
    expect(d.dy).toBe('Sat');
  });

  it('should return the correct date', () => {
    expect(d.date).toBe(2);
  });

  it('should return the correct hours', () => {
    expect(d.hours).toBe(3);
  });

  it('should return the correct minutes', () => {
    expect(d.mins).toBe(4);
  });

  it('should return the correct seconds', () => {
    expect(d.secs).toBe(5);
  });

  it('should return the correct ordinal', () => {
    expect(d.ordinal).toBe('2nd');
  });

  it('should format the date correctly', () => {
    const d = new D(2017, 8, 2, 3, 4, 5);
    expect(d.format()).toBe('2017 September 02');
  });

  it('should return the correct year', () => {
    const d = new D(2017, 8, 2, 3, 4, 5);
    expect(d.year).toBe(2017);
  });

  it('should return a human-readable description of when the date will occur', () => {
    const d = new D();
    expect(d.when()).toBe('today');
  });

  it('should return a human-readable description of when a past date occurred', () => {
    const d = new D(2017, 8, 2, 3, 4, 5);
    // This test assumes the current date is after September 2, 2017.
    // You might need to adjust it depending on the current date.
    expect(d.when()).toMatch(/years ago$/);
  });

  // ... (more tests for other methods)
});
