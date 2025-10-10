import { createFileRoute } from "@tanstack/react-router";
import { SyntheticEvent, useMemo, useState } from "react";
import AppWrapper from "../components/templates/AppWrapper";
import CryptoJS from "crypto-js";
import { hashPasswordToEmoji } from "../utils/hash";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const [value, setValue] = useState("");
	const [generatedValue, setGeneratedValue] = useState("");

	const onChange = (e) => {
		const val = e.target.value;
		setValue(val);
	};

const onGenerate = async () => {
    if (!value) return;
    const hashVal = await hashPasswordToEmoji(value);
    setGeneratedValue(hashVal);
};
	return (
		<div>
			<input onChange={onChange} value={value} />
			{value}
			<button onClick={onGenerate}>generate</button>
			{generatedValue}
		</div>
	);
}
