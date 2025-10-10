import { OnboardingTextData } from "../../atoms/OnboardingTextData";
import { t } from "i18next";
import {
	OnboardingButtonWidth,
	OnboardingButtonWrapper,
	OnboardingItemsWrapper,
	OnboardingProgressBarWrapper,
	OnboardingWrapper,
} from "./styles";
import { ProgressBar } from "../../atoms/ProgressBar";
import { Button } from "../../atoms/Button";
import { useOnboardingController } from "./useOnboardingController";

export const Onboarding = () => {
	const { values, currentStep, itemsCount, makeProgressStep, buttonTitle } =
		useOnboardingController();

	return (
		<OnboardingWrapper>
			<OnboardingItemsWrapper>
				<OnboardingProgressBarWrapper>
					<ProgressBar currentStep={currentStep} itemsCount={itemsCount} />
				</OnboardingProgressBarWrapper>
				<OnboardingTextData
					emoji={values.emoji}
					title={t(`onboarding.${values.title}`)}
					description={t(`onboarding.${values.description}`)}
				/>
				<OnboardingButtonWrapper>
					<OnboardingButtonWidth>
						<Button variant="primary" onClick={makeProgressStep}>
							{t(`onboarding.${buttonTitle}`)}
						</Button>
					</OnboardingButtonWidth>
				</OnboardingButtonWrapper>
			</OnboardingItemsWrapper>
		</OnboardingWrapper>
	);
};
