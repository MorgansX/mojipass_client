import React from "react";
import {
	InputComponent,
	InputLabel,
	InputWrapper,
	InputContainer,
	InputAdornment,
} from "./styles";
import { FormInputData } from "../../../constants/form/config";

export const FormInput: React.FC<FormInputData> = ({
	label,
	name,
	type,
	adornmentId,
	id,
}) => (
	<InputWrapper>
		<InputLabel>{label}</InputLabel>
		<InputContainer>
			<InputAdornment>
				{/* Your icon or adornment here */}
				<span>{adornmentId}</span>
			</InputAdornment>
			<InputComponent name={name} type={type} id={id} />
		</InputContainer>
	</InputWrapper>
);
