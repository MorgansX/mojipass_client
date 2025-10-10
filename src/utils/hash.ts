import CryptoJS from "crypto-js";

export interface HashPassReturnError {
	message: string;
}

const firstHashLayer = (value: string) => CryptoJS.SHA256(value).toString();

const getRandomEmoji = () => {
	const ranges = [
		[0x1f600, 0x1f64f], // Emoticons
		[0x1f680, 0x1f6ff], // Transport and Map
	];

	const range = ranges[Math.floor(Math.random() * ranges.length)];
	const codePoint =
		Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];

	return String.fromCodePoint(codePoint);
};

const secondHashLayer = () => {
	const randomCharCount = Math.floor(Math.random() * 3) + 1;
	const emojiCharsArray = [...Array(randomCharCount)].map(() =>
		getRandomEmoji(),
	);

	return emojiCharsArray.join("");
};

export const hashPasswordToEmoji = (
	value: string,
	concatTo?: number,
): Promise<string> => {
	return new Promise((resolve, reject) => {
		const acc: string[] = [];
		const firstHashIterationResult = firstHashLayer(value);

		[...firstHashIterationResult].forEach(() => {
			const emojiHashChunk = secondHashLayer();
			acc.push(emojiHashChunk);
		});

		const result = [...acc.join("")].slice(0, concatTo).join("");

		if (!result) {
			reject("Unable to parse password to emoji, please try again");
		}

		resolve(result);
	});
};
