import CryptoJS from "crypto-js";

const firstHashLayer = (value: string) => CryptoJS.SHA256(value).toString();

const secondHashLayer = (value: string) => null;

export const hashPasswordToEmoji = (value: string) => {
	return new Promise((resolve, reject) => {
        const firstHashIterationResult = firstHashLayer(value);
        resolve(firstHashIterationResult)
    });
};
