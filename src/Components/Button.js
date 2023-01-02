import styled from "styled-components";
import { Green } from "../Styles/colors";

const Bouton = styled.button`
    padding: ${props => props.littlesize || "1.25rem 1.75rem"};
    border: 1px solid ${Green};
    background: none;
    border-radius: 4px;
    color: ${Green};
    margin-left: ${props => props.littlesize && "15px"}
`

export default Bouton