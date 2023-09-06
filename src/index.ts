class D {
  private _date: Date;
  private _currentDate: Date;

  /**
   * Create a date object.
   * @param {...any[]} args - The arguments to create a date.
   */
  constructor(...args: any[]) {
    this._currentDate = new Date();
    if (args.length === 0) {
      this._date = new Date();
    } else if (typeof args[0] === 'string') {
      this._date = new Date(args[0]);
    } else if (args[0] instanceof Date) {
      this._date = new Date(args[0].getTime());
    } else {
      this._date = new Date(...(args as []));
    }
  }

  /**
   * Get the year of the date in long format.
   * @return {number} The year of the date.
   */
  get year(): number {
    return this._date.getFullYear();
  }

  /**
   * Get the year of the date in short format.
   * @return {number} The year of the date.
   */
  get yr(): number {
    return this.year % 100;
  }

  /**
   * Get the month of the date in long format.
   * @return {string} The month of the date.
   */
  get month(): string {
    return this._date.toLocaleString('default', { month: 'long' });
  }

  /**
   * Get the month of the date in short format.
   * @return {string} The month of the date.
   */
  get mon(): string {
    return this._date.toLocaleString('default', { month: 'short' });
  }

  /**
   * Get the day of the week in long format.
   * @return {string} the day of the week.
   */
  get day(): string {
    return this._date.toLocaleString('default', { weekday: 'long' });
  }

  /**
   * Get the day of the week in short format.
   * @return {string} the day of the week.
   */
  get dy(): string {
    return this._date.toLocaleString('default', { weekday: 'short' });
  }

  /**
   * Get the year of the date.
   * @return {number} The year of the date.
   */
  get date(): number {
    return this._date.getDate();
  }

  /**
   * Get the hours of the date.
   * @return {number} The hours of the date.
   */
  get hours(): number {
    return this._date.getHours();
  }

  /**
   * Get the minutes of the date.
   * @return {number} The minutes of the date.
   */
  get mins(): number {
    return this._date.getMinutes();
  }

  /**
   * Get the seconds of the date.
   * @return {number} The seconds of the date.
   */
  get secs(): number {
    return this._date.getSeconds();
  }

  get ordinal(): string {
    const d = this.date;
    const suffix = ['th', 'st', 'nd', 'rd'];
    const index = d % 100;
    return d + (suffix[(index - 20) % 10] || suffix[index] || suffix[0]);
  }

  /**
   * Format the date.
   * @param {string} format - The format string.
   * @return {string} The formatted date.
   */
  format(format: string = 'Y-M-D'): string {
    const replacements = {
      Y: this.year.toString(),
      y: this.yr.toString(),
      M: this.month.toString(),
      m: this.mon.toString(),
      D: this.date.toString().padStart(2, '0'),
      d: this.date.toString(),
      L: this.day.toString(),
      l: this.dy.toString(),
      H: this.hours.toString().padStart(2, '0'),
      h: this.hours.toString(),
      I: this.mins.toString().padStart(2, '0'),
      i: this.mins.toString(),
      S: this.secs.toString().padStart(2, '0'),
      s: this.secs.toString(),
      '#': this.ordinal.toString(),
    };

    let formattedStr = '';

    for (const mask of format.split('')) {
      if (replacements[mask as keyof typeof replacements]) {
        formattedStr += replacements[mask as keyof typeof replacements];
      } else {
        formattedStr += mask;
      }
    }

    return formattedStr;
  }

  /**
   * Get a human-readable description of when the date will occur.
   * @return {string} A description of when the date will occur.
   */
  when(): string {
    const diff = this._currentDate.getTime() - this._date.getTime();

    const units = [
      { name: 'year', duration: 1000 * 60 * 60 * 24 * 365.25 },
      { name: 'month', duration: 1000 * 60 * 60 * 24 * 30.44 },
      { name: 'day', duration: 1000 * 60 * 60 * 24 },
      { name: 'hour', duration: 1000 * 60 * 60 },
      { name: 'minute', duration: 1000 * 60 },
      { name: 'second', duration: 1000 },
    ];

    for (const unit of units) {
      const diffInUnit = Math.floor(diff / unit.duration);
      if (Math.abs(diffInUnit) > 0) {
        return this.formatTimeDiff(diffInUnit, unit.name);
      }
    }

    return 'today';
  }

  /**
   * Format a time difference.
   * @param {number} diff - The time difference.
   * @param {string} unit - The unit of time.
   * @return {string} The formatted time difference.
   */
  private formatTimeDiff(diff: number, unit: string): string {
    const absDiff = Math.abs(diff);
    const plural = absDiff === 1 ? '' : 's';
    const suffix = diff > 0 ? 'ago' : 'from now';
    return `${absDiff} ${unit}${plural} ${suffix}`;
  }
}

export { D };
