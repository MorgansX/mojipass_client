import { background } from "../../../theme/colors";

type ButtonColors = {
	readonly bgColor: string;
	readonly textColor: string;
};

export type ButtonVariant = "primary" | "secondary";

type ButtonTemplateType = Record<ButtonVariant, ButtonColors>;

export const buttonTemplate: ButtonTemplateType = {
	primary: {
		bgColor: background.progressBar.gradient.join(" ,"),
		textColor: "#ffffff",
	},
	secondary: {
		bgColor: "#6c757d",
		textColor: "#ffffff",
	},
} as const;
