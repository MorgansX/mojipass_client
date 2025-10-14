import styled from "styled-components";

export const FormContaner = styled.div`
max-width:550px;
width:100%;
min-width:270px;
padding:10px;
border-radius:12px;
border:1px solid #eaeaea;
`;

export const InputsConatiner = styled.div`
width:100%;
backrgound:#fc3;
`;

export const InputMargin = styled.div`
margin-bottom:10px;
`;

export const SymbolSliceButton = styled.button<{ isActive: boolean }>`
    cursor: pointer;
    width:50px;
    background: ${(props) => (props.isActive ? "#4eed63" : "#3480eb")};
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 5px;
    font-size: 16px;
`;

export const SliceButtonContainer = styled.div`
    margin: 0 5px 0 5px;
`
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;
`

export const GenerateButtonContainer = styled.div`
    width: 250px;
    margin-top: 25px;
`
