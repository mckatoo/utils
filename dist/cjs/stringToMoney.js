"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMonetaryValue = exports.stringToMoney = void 0;
const stringToMoney = (value, options) => {
    const cleanValue = value.replace(/[^\d.,]/g, '');
    let number;
    if (cleanValue.includes(',')) {
        number = Number(cleanValue.replace(/\./g, '').replace(',', '.'));
    }
    else {
        number = Number(cleanValue);
    }
    if (isNaN(number)) {
        throw new Error('Invalid number format');
    }
    const defaultOptions = {
        currency: 'BRL',
        locale: 'pt-BR',
        decimals: 2,
        ...options
    };
    const formatter = new Intl.NumberFormat(defaultOptions.locale, {
        style: 'currency',
        currency: defaultOptions.currency,
        minimumFractionDigits: defaultOptions.decimals,
        maximumFractionDigits: defaultOptions.decimals
    });
    return formatter.format(number);
};
exports.stringToMoney = stringToMoney;
const toMonetaryValue = (value) => {
    const sanitizedValue = value.replace(".", "").replace(",", "");
    if (sanitizedValue.length < 3)
        return sanitizedValue;
    const withDecimal = sanitizedValue.length < 3
        ? sanitizedValue
        : sanitizedValue.slice(0, -2) + "." + sanitizedValue.slice(-2);
    const parsedValue = parseFloat(withDecimal).toFixed(2);
    return parsedValue;
};
exports.toMonetaryValue = toMonetaryValue;
