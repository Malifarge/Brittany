import BigTitle from "./BigTitle"
import Bouton from "./Button"
import H1 from "./H1"
import Namebox from "./NameBox"
import PararapheBox from "./ParagrapheBox"
import Span from "./Span"
import SubTitle from "./SubTitle"

const Main = () =>{
    return(
        <>
            <Namebox>
                <H1>Hi,my name is</H1>
                <BigTitle>Brittany Chiang.</BigTitle>
                <SubTitle>I build thing for the Web.</SubTitle>
                <PararapheBox>
                <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <Span>Upstatement</Span>.</p>
                </PararapheBox>
                <Bouton>Check out my course!</Bouton>
            </Namebox>
        </>
    )
}

export default Main