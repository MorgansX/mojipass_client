import React, { useState } from "react";
import {
	InputComponent,
	InputLabel,
	InputWrapper,
	InputContainer,
	InputAdornment,
	PasswordAdornment,
	PasswordHandleButton,
} from "./styles";
import { FormInputData } from "../../../constants/form/config";
import { SvgIcon } from "../SvgIcon";

export const FormInput: React.FC<FormInputData> = ({
	label,
	name,
	type,
	id,
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const isPasswordInput = type === "password";
	const inputType = isPasswordInput && showPassword ? "text" : type;
	const eyeIconId = showPassword ? "eye" : "eye_off";

	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<InputWrapper>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<InputContainer>
				<InputAdornment>
					<SvgIcon id={id} size={20} />
				</InputAdornment>
				{isPasswordInput && (
					<PasswordAdornment>
						<PasswordHandleButton
							type="button"
							onClick={togglePasswordVisibility}
							aria-label={showPassword ? "Hide password" : "Show password"}
						>
							<SvgIcon id={eyeIconId} size={20} />
						</PasswordHandleButton>
					</PasswordAdornment>
				)}
				<InputComponent name={name} type={inputType} id={name} />
			</InputContainer>
		</InputWrapper>
	);
};
