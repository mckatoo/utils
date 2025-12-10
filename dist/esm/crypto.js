"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.decrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const IV_LENGTH = 16;
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto_1.default.randomBytes(IV_LENGTH / 2).toString('hex');
if (!ENCRYPTION_KEY) {
    throw new Error('ENCRYPTION_KEY is not defined');
}
const decrypt = (encryptedData) => {
    const iv = encryptedData.subarray(0, IV_LENGTH);
    const encryptedText = encryptedData.subarray(IV_LENGTH);
    const decipher = crypto_1.default.createDecipheriv('aes-128-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted;
};
exports.decrypt = decrypt;
const encrypt = (fileData) => {
    const iv = crypto_1.default.randomBytes(IV_LENGTH);
    const cipher = crypto_1.default.createCipheriv('aes-128-cbc', ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(fileData);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    const encryptedData = Buffer.concat([iv, encrypted]);
    return encryptedData;
};
exports.encrypt = encrypt;
