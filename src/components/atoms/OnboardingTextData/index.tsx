import type React from "react";
import type { OnboardingItem } from "../../../common/types/onboarding";
import { Emoji, OnboardingTextDataWrapper, Title } from "./styles";

export const OnboardingTextData: React.FC<OnboardingItem> = ({
	emoji,
	title,
	description,
}) => (
	<OnboardingTextDataWrapper>
		<Emoji>{emoji}</Emoji>
		<Title>{title}</Title>
		<p>{description}</p>
	</OnboardingTextDataWrapper>
);
