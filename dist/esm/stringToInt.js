"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToInt = stringToInt;
function stringToInt(value) {
    if (!!isNaN(parseInt(value)) || !isFinite(parseInt(value)))
        return;
    return parseInt(value);
}
