import { OnboardingTextData } from "../../atoms/OnboardingTextData";
import { onboardingConfig } from "../../../constants/onboarding/config";
import { useState } from "react";
import { t } from "i18next";
import { OnboardingProgressBarWrapper, OnboardingWrapper } from "./styles";
import { ProgressBar } from "../../atoms/ProgressBar";

export const Onboarding = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const { emoji, title, description } = onboardingConfig[currentStep];

	const itemsCount = onboardingConfig.length;

	const makeProgressStep = () => {
		if (currentStep >= itemsCount - 1) return;
		setCurrentStep((prev) => prev + 1);
	};

	return (
		<OnboardingWrapper>
			<OnboardingProgressBarWrapper>
				<ProgressBar currentStep={currentStep} itemsCount={itemsCount} />
			</OnboardingProgressBarWrapper>
			<OnboardingTextData
				emoji={emoji}
				title={title}
				description={description}
			/>
			<button onClick={makeProgressStep}>+</button>
		</OnboardingWrapper>
	);
};
