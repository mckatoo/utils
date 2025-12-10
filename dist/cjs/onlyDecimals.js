"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyDecimals = void 0;
const onlyDecimals = (value) => value.trim().replace(/[^0-9]+/g, "");
exports.onlyDecimals = onlyDecimals;
