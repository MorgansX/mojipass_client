import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
height:8px;
width:70%;
background:#eaeaea;
border-radius:12px;
margin-left:12px
`;

export const ProgressBarWidthItem = styled.div<{ itemWidth: string }>`
width:${(props) => props.itemWidth};
background:red;
height:8px;
transition:all .8s;
border-radius:12px;
`;
