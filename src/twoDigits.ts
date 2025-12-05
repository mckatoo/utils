/**
 * Pads a number with leading zeros to make it two digits long.
 * @param n The number to pad.
 * @returns The padded number.
 * @example
 * twoDigits(1) // "01"
 * twoDigits(12) // "12"
 * twoDigits(123) // "123"
 */
export default (n: number) => n.toString().padStart(2, '0')
