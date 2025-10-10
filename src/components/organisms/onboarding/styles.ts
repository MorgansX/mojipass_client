import styled from "styled-components";

export const OnboardingWrapper = styled.main`
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items: center;
`;

export const OnboardingProgressBarWrapper = styled.div`
    margin-top:25px;
    width:inherit;
    display: flex;
    justify-content: center;
`;

export const OnboardingItemsWrapper = styled.div`
    height: 100%;
    max-width: 560px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const OnboardingButtonWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 100%;
    display:flex;
    justify-content:center;
`;
export const OnboardingButtonWidth = styled.div`
  max-width: 560px;
    width: 100%;
 padding: 10px;
`