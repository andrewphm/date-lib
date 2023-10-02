declare class D {
    private _date;
    private _currentDate;
    /**
     * Create a date object.
     * @param {...any[]} args - The arguments to create a date.
     */
    constructor(...args: any[]);
    /**
     * Get the year of the date in long format.
     * @return {number} The year of the date.
     */
    get year(): number;
    /**
     * Get the year of the date in short format.
     * @return {number} The year of the date.
     */
    get yr(): number;
    /**
     * Get the month of the date in long format.
     * @return {string} The month of the date.
     */
    get month(): string;
    /**
     * Get the month of the date in short format.
     * @return {string} The month of the date.
     */
    get mon(): string;
    /**
     * Get the day of the week in long format.
     * @return {string} the day of the week.
     */
    get day(): string;
    /**
     * Get the day of the week in short format.
     * @return {string} the day of the week.
     */
    get dy(): string;
    /**
     * Get the year of the date.
     * @return {number} The year of the date.
     */
    get date(): number;
    /**
     * Get the hours of the date.
     * @return {number} The hours of the date.
     */
    get hours(): number;
    /**
     * Get the minutes of the date.
     * @return {number} The minutes of the date.
     */
    get mins(): number;
    /**
     * Get the seconds of the date.
     * @return {number} The seconds of the date.
     */
    get secs(): number;
    get ordinal(): string;
    /**
     * Format the date.
     * @param {string} format - The format string.
     * @return {string} The formatted date.
     */
    format(format?: string): string;
    /**
     * Get a human-readable description of when the date will occur.
     * @return {string} A description of when the date will occur.
     */
    when(): string;
    /**
     * Format a time difference.
     * @param {number} diff - The time difference.
     * @param {string} unit - The unit of time.
     * @return {string} The formatted time difference.
     */
    private formatTimeDiff;
}
export default D;
