import numeral from "numeral";
import { DECIMAL } from "./const";

/**
 * format amount in 2 decimal places and suffix like k, M, B
 * @param amount - The amount to format
 * @returns {string} - amount with suffix like M for Million
 */
export const formatAmount = (amount: number | undefined) => {
  if (amount === 0) {
    return "0.00";
  }
  if (!amount) return "-";
  let precision = 2;
  let format = `0.${"0".repeat(precision)}a`;
  const amountWithPrecision = parseFloat(amount.toFixed(precision));
  // toUpperCase is needed cause numeral doesn't have support for capital K M B out of the box
  return numeral(amountWithPrecision).format(format).toUpperCase();
};

/**
 *
 * @param {bigint} value - the numerator
 * @param {number} by - denominator = 10**by
 * @returns {number}
 */
export const reduceValue = (value: bigint, by: number = DECIMAL) => {
  if (value) {
    return Number(value / BigInt(10 ** by));
  } else {
    return Number(value);
  }
};

/**
 *
 * @param arr - array of numbers to sum
 * @returns {number} - sum of array
 */
export const sum = (arr: number[]) => {
  if (arr) {
    return arr.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
};

// timeSince copied from https://stackoverflow.com/a/3177838/7283203
/**
 * show how long ago date is
 * @param date - date timestamp
 * @returns {string}
 */
export const timeSince = (date: number | string) => {
  if (!date) {
    return null;
  }
  var seconds = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  );

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

/**
 * truncate text to 0x{length}...{length}
 * @param text
 * @param length
 * @returns {string} truncatedText
 */
export const truncateText = (text: string, length = 6) => {
  if (length && length > 0) {
    return `${text.slice(0, length + 2)}...${text.slice(-length)}`;
  } else {
    return text;
  }
};
