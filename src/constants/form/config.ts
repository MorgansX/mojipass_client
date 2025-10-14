export type FormInputData = {
	name: string;
	type: string;
	id: string;
	label: string;
};

export const formConfig: readonly FormInputData[] = [
	{
		name: "account_name",
		type: "text",
		id: "account_name",
		adornmentId: "profile",
		label: "Account Name",
	},
	{
		name: "account_id",
		type: "text",
		id: "account_id",
		adornmentId: "profile_id",
		label: "Account Id (email or other)",
	},
	{
		name: "account_password",
		type: "password",
		id: "account_password",
		adornmentId: "profile_password",
		label: "Account Password",
	},
];

export const symbolsSlices = [4, 8, 12, 15, 32];
