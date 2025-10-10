import React from "react";
import { formConfig, symbolsSlices } from "../../../constants/form/config";
import { FormInput } from "../../atoms/FormInput";
import { FormContaner, InputMargin, InputsConatiner } from "./styles";

export const PasswordForm = () => {
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
            <div>
            <label>Generate symbols</label>
            {
                symbolsSlices.map((slice) => (
                    <button>{slice}</button>
                ))
            }
            </div>
		</FormContaner>
	);
};
