import crypto from 'crypto';

const IV_LENGTH = 16
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(IV_LENGTH / 2).toString('hex')

if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY is not defined');
}

export const decrypt = (encryptedData: Buffer): Buffer => {
  const iv = encryptedData.subarray(0, IV_LENGTH);
  const encryptedText = encryptedData.subarray(IV_LENGTH);
  const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted;
}

export const encrypt = (fileData: Buffer) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-128-cbc', ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(fileData);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  const encryptedData = Buffer.concat([iv, encrypted]);
  return encryptedData;
}

