import React from "react";
import { ProgressBarWrapper, ProgressBarWidthItem } from "./styles";
import { useEffect, useRef, useState } from "react";

type ProgressBar = {
	itemsCount: number;
	currentStep: number;
};

export const ProgressBar: React.FC<ProgressBar> = ({
	itemsCount,
	currentStep,
}) => {
	const [maxBarWidth, setMaxBarWidth] = useState<number>(0);
	const barRef = useRef<HTMLDivElement>(null);

	const widthPerItem = maxBarWidth / itemsCount;
	const width = (currentStep + 1) * widthPerItem;

	const updateWidth = () => {
		if (barRef.current) {
			setMaxBarWidth(barRef.current.clientWidth);
		}
	};

	useEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<ProgressBarWrapper ref={barRef}>
			<ProgressBarWidthItem itemWidth={`${width}px`} />
		</ProgressBarWrapper>
	);
};