import crypto from 'crypto';

const IS_DEV = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
const IV_LENGTH = 16
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(IV_LENGTH / 2).toString('hex')

if (IS_DEV) {
  console.log('ENCRYPTION_KEY =>', ENCRYPTION_KEY)
}

if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY is not defined');
}

type Options = {
  algorithm?: 'aes-128-cbc' | 'aes-192-cbc' | 'aes-256-cbc' | string;
};

export const decrypt = (encryptedData: Buffer, options?: Options): Buffer => {
  const algorithm = options?.algorithm || 'aes-128-cbc';

  const iv = encryptedData.subarray(0, IV_LENGTH);
  const encryptedText = encryptedData.subarray(IV_LENGTH);
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted;
}

export const encrypt = (fileData: Buffer, options?: Options) => {
  const algorithm = options?.algorithm || 'aes-128-cbc';
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(fileData);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  const encryptedData = Buffer.concat([iv, encrypted]);
  return encryptedData;
}