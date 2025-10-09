import { OnboardingTextData } from "../../atoms/OnboardingTextData";
import { onboardingConfig } from "../../../constants/onboarding/config";
import { useState } from "react";
import { t } from "i18next";
import { OnboardingProgressBarWrapper, OnboardingWrapper } from "./styles";
import { ProgressBar } from "../../atoms/ProgressBar";

export const Onboarding = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const { emoji, title, description } = onboardingConfig[currentIndex];
	return (
		<OnboardingWrapper>
			<OnboardingProgressBarWrapper>
			<ProgressBar currentStep={currentIndex} itemsCount={onboardingConfig.length}/>
			</OnboardingProgressBarWrapper>
			<OnboardingTextData
				emoji={emoji}
				title={title}
				description={description}
			/>
		</OnboardingWrapper>
	);
};
