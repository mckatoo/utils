import { deflate, inflate } from "zlib";

export const compress = (data: Buffer): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        deflate(data, (err, result) => {
            if (err) {
                reject(new Error('Error compressing data'));
            }
            resolve(result);
        });
    });
}

export const decompress = (data: Buffer): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        inflate(data, (err, result) => {
            if (err) {
                reject(new Error('Error decompressing data'));
            }
            resolve(result);
        });
    });
}