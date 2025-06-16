import dayjs, { ConfigType } from 'dayjs';
export declare function parseDate(date: ConfigType, format?: string): dayjs.Dayjs;
/**
 * Parses a given timestamp into detailed date components.
 *
 * @function
 * @param {number} timestamp - The timestamp in milliseconds since January 1, 1970 (epoch time).
 * @returns {Object} An object containing the following date details:
 *   - {number} year - The four-digit year (e.g., 2024).
 *   - {string} month - The full name of the month (e.g., "August").
 *   - {string} dayOfWeek - The abbreviated name of the day of the week (e.g., "Mon").
 *   - {number} day - The day of the month (e.g., 26).
 *   - {number} hours - The hour of the day in 24-hour format (0-23).
 *   - {number} minutes - The minutes of the hour (0-59).
 */
export declare function parseTimestampToDateDetails(timestamp: number): {
    year: number;
    month: string;
    dayOfWeek: string;
    day: number;
    hours: number;
    minutes: number;
};
