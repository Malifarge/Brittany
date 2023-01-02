import styled from "styled-components";
import { Large } from "../Styles/font-Sizes";
import { mobile } from "../Styles/media";

const AboutTextBox = styled.article`
    display: flex;
    gap: ${Large};

    @media screen and (max-width: ${mobile}) {
        flex-direction: column;
      }
`

export default AboutTextBox