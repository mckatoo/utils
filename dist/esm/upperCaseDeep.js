"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperCaseDeep = void 0;
const upperCaseDeep = (obj) => {
    const result = { ...obj };
    for (const key in result) {
        const value = result[key];
        if (typeof value === 'string') {
            result[key] = value.toUpperCase();
        }
        else if (Array.isArray(value)) {
            result[key] = value.map((item) => {
                if (typeof item === 'string') {
                    return item.toUpperCase();
                }
                else if (typeof item === 'object' && item !== null) {
                    return (0, exports.upperCaseDeep)(item);
                }
                return item;
            });
        }
        else if (typeof value === 'object' && value !== null) {
            result[key] = (0, exports.upperCaseDeep)(value);
        }
    }
    return result;
};
exports.upperCaseDeep = upperCaseDeep;
