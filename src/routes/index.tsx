import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { hashPasswordToEmoji } from "../utils/hash";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const [generatedValue, setGeneratedValue] = useState("");

	const onGenerate = async () => {
		const value = passwordInputRef.current?.value.trim();
		if (!value) return;

		try {
			const hashVal = await hashPasswordToEmoji(value, 12);
			setGeneratedValue(hashVal);
		} catch (err) {
			console.log(`Error handler ${err}`);
		}
	};

	return (
		<div>
			<input ref={passwordInputRef} />
			<button onClick={onGenerate}>generate</button>
			{generatedValue}
		</div>
	);
}
