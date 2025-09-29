import styled from "styled-components";
import { background } from "../../../theme/colors";

export const Wrapp = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(to right,${background.primary.gradient[0]},${background.primary.gradient[1]});
`;
