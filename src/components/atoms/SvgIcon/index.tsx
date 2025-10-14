import React from "react";
import { svgIcons } from "./svg.tsx";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
	id: keyof typeof svgIcons;
	size?: number;
	className?: string;
	color?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
	id,
	size = 24,
	className = "",
	color = "currentColor",
	...props
}) => {
	const icon = svgIcons[id];

	if (!icon) {
		console.warn(`Icon with id "${id}" not found`);
		return null;
	}

	return (
		<svg
			width={size}
			height={size}
			viewBox={icon.viewBox}
			className={className}
			style={{ color }}
			xmlns="http://www.w3.org/2000/svg"
			alt={"icon"}
			{...props}
		>
			<title style={{ display: "none" }} id={`icon-${id}`}>
				{""}
			</title>
			{icon.content}
		</svg>
	);
};
