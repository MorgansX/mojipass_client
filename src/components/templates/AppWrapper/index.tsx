import type { PropsWithChildren } from "react";
import type React from "react";
import { Wrapp } from "./styles";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<Wrapp>{children}</Wrapp>
);

export default AppWrapper;
