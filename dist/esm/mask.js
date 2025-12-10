"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCepNumber = exports.normalizeCPFNumber = exports.normalizeCnpjNumber = exports.normalizePhoneNumber = void 0;
/**
 * Ex: normalizePhoneNumber('19987654321') => '(19) 98765-4321'
 */
const normalizePhoneNumber = (value) => {
    if (!value)
        return '';
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
};
exports.normalizePhoneNumber = normalizePhoneNumber;
const normalizeCnpjNumber = (value) => {
    if (!value)
        return '';
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
};
exports.normalizeCnpjNumber = normalizeCnpjNumber;
const normalizeCPFNumber = (value) => {
    if (!value)
        return '';
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
exports.normalizeCPFNumber = normalizeCPFNumber;
const normalizeCepNumber = (value) => {
    if (!value)
        return '';
    return value.replace(/\D/g, "")
        .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
        .replace(/(-\d{3})(\d+?)/, '$1');
};
exports.normalizeCepNumber = normalizeCepNumber;
