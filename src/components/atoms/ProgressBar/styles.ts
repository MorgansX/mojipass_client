import styled from "styled-components";
import { background } from "../../../theme/colors";

export const ProgressBarWrapper = styled.div`
    height:8px;
    width:100%;
    background:#eaeaea;
    border-radius:12px;
`;

export const ProgressBarWidthItem = styled.div<{ itemWidth: string }>`
    width:${(props) => props.itemWidth};
    background:linear-gradient(to right,${background.progressBar.gradient.join(", ")});
    height:8px;
    transition:all .8s;
    border-radius:12px;
`;
