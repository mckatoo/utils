"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompress = exports.compress = void 0;
const zlib_1 = require("zlib");
const compress = (data) => {
    return new Promise((resolve, reject) => {
        (0, zlib_1.deflate)(data, (err, result) => {
            if (err) {
                reject(new Error('Error compressing data'));
            }
            resolve(result);
        });
    });
};
exports.compress = compress;
const decompress = (data) => {
    return new Promise((resolve, reject) => {
        (0, zlib_1.inflate)(data, (err, result) => {
            if (err) {
                reject(new Error('Error decompressing data'));
            }
            resolve(result);
        });
    });
};
exports.decompress = decompress;
