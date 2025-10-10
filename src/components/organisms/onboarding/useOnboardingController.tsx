import { useEffect, useState } from "react";
import { onboardingConfig } from "../../../constants/onboarding/config";
import { useFirstVisit } from "../../../hooks/useFirstVisit";

export const useOnboardingController = () => {
	const [buttonTitle, setButtonTittle] = useState<string>("Next");
	const [currentStep, setCurrentStep] = useState(0);
	const { emoji, title, description } = onboardingConfig[currentStep];
	const { markAsVisited } = useFirstVisit();

	const itemsCount = onboardingConfig.length;
    const isLastStep = currentStep === itemsCount - 1;

	const makeProgressStep = () => {
		if (currentStep >= itemsCount - 1) {
			markAsVisited();
			return
		};
		setCurrentStep((prev) => prev + 1);
	};


	useEffect(() => {
		if (isLastStep) {
			setButtonTittle("Dive in");
		}
	}, [isLastStep]);

	return {
		currentStep,
		itemsCount,
		buttonTitle,
		makeProgressStep,
		values: { emoji, title, description },
	};
};
