import styled from "styled-components";
import PhotoBox from "./PhotoBox";

const Img =styled.img`
    width: 300px;
    height: 300px;
    opacity: 0.5;
    filter: contrast(200%);
    ${PhotoBox}:hover & {
        opacity: 1;
        filter: contrast(100%);
      }
`

export default Img