import type React from "react";
import { AppButton } from "./styles";
import type { PropsWithChildren } from "react";
import { buttonTemplate, type ButtonVariant } from "./constants";

interface AppButtonProps extends PropsWithChildren {
	variant: ButtonVariant;
	onClick: (arg?: unknown) => void;
	isDisabled?: boolean;
}

export const Button: React.FC<AppButtonProps> = ({
	children,
	variant,
	onClick,
	isDisabled,
}) => {
	const buttonLayoutOptions = buttonTemplate[variant];
	return (
		<AppButton
			disabled={isDisabled}
			onClick={onClick}
			bgColor={buttonLayoutOptions.bgColor}
			textColor={buttonLayoutOptions.textColor}
		>
			{children}
		</AppButton>
	);
};
