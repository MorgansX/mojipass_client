import styled from "styled-components";

type AppButtomProps = {
	bgColor: string;
	textColor: string;
};

export const AppButton = styled.button<AppButtomProps>`
background: linear-gradient(to right,${(props) => props.bgColor});
color:${(props) => props.textColor};
width:100%;
height:55px;
cursor:pointer;
border-radius:25px;
font-weight:500;
font-size:20px;
outline:none;
border:none;
transition: all .3s;

&:hover {
	box-shadow: 0px 10px 13px -7px #000000, 5px 6px 15px -13px rgba(0,0,0,0);
	}

    	&:active {
		transform: scale(0.98);
		opacity: 0.8;
	}
`;
