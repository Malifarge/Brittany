import LogoBox from "./LogoBox"
import Polygon from "./Polygon"

const Logo = () =>{
    return(
        <LogoBox>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 90 100">
                <Polygon points="39 0 0 22 0 67 39 90 78 68 78 23" fill="none"/>
            </svg>
        </LogoBox>
    )
}

export default Logo
