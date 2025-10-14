import React, { useState } from "react";
import { formConfig, symbolsSlices } from "../../../constants/form/config";
import { FormInput } from "../../atoms/FormInput";
import {
	ButtonsContainer,
	FormContaner, GenerateButtonContainer, GenerateEmojiButton,
	InputMargin,
	InputsConatiner, SliceButtonContainer,
	SymbolSliceButton,
} from "./styles";
import {Button} from "../../atoms/Button";

export const PasswordForm = () => {
	const [symbolSlice, setSymbolSlice] = useState<number>(null);
	const onSymbolSliceClick = (slice: number) => setSymbolSlice(slice);
	return (
		<FormContaner>
			<h1>Save your password</h1>
			<InputsConatiner>
				{formConfig.map((input) => (
					<InputMargin key={input.id}>
						<FormInput {...input} />
					</InputMargin>
				))}
			</InputsConatiner>
			<ButtonsContainer>
				<label>Generate symbols</label>
				{symbolsSlices.map((slice) => (
					<SliceButtonContainer key={slice}>
					<SymbolSliceButton
						isActive={slice === symbolSlice}
						onClick={() => onSymbolSliceClick(slice)}
					>
						{slice}
					</SymbolSliceButton>
					</SliceButtonContainer>
				))}
			</ButtonsContainer>

			<GenerateButtonContainer>
			<Button variant="primary">generate</Button>
			</GenerateButtonContainer>
		</FormContaner>
	);
};
