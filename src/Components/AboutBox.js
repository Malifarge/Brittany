import styled from "styled-components"
import { mobile, tablet } from "../Styles/media"

const AboutBox = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 150px;

    @media screen and (max-width: ${tablet}) {
        padding: 100px 100px;
      }
    
    @media screen and (max-width: ${mobile}) {
        padding: 100px 50px;
      }
`

export default AboutBox