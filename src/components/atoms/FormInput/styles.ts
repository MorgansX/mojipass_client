import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  min-width: 250px;
`;

export const InputLabel = styled.label`
  margin-bottom: 4px;
  font-size:12px;
  padding-left:2px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputAdornment = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #666;
`;

export const InputComponent = styled.input`
  border: none;
  height: 40px;
  border-radius: 8px;
  padding-left:40px;
  width: 100%;
  outline:none;
  border:1px solid #757575;

  &:focus {
    border-color:#558cd4
  }
`;
