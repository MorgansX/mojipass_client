import React from "react";
import { ProgressBarWrapper, ProgressBarWidthItem } from "./styles";
import { useEffect, useRef, useState } from "react";

// TODO: Prop usage example:

// const [currentStep, setCurrentStep] = useState(0);
// const itemsCount = 7;

// const makeProgressStep = () => {
// 	if (currentStep >= itemsCount) return;
// 	setCurrentStep((prev) => prev + 1);
// };

// const resetProgress = () => {
// 	setCurrentStep(0);
// };

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
	const width = currentStep * widthPerItem;

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
			<ProgressBarWidthItem itemWidth={`${width}px`}/>
		</ProgressBarWrapper>
	);
};
