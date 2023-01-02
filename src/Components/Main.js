import AboutBox from "./AboutBox"
import AboutTextBox from "./AboutTextBox"
import BigTitle from "./BigTitle"
import Bouton from "./Button"
import H1 from "./H1"
import Namebox from "./NameBox"
import ParagrapheAboutBox from "./ParagrapheAboutBox"
import PararapheStartBox from "./ParagrapheStartBox"
import Span from "./Span"
import SubTitle from "./SubTitle"
import Title from "./Title"
import Photo from "../Images/me.avif"
import Img from "./Img"
import PhotoBox from "./PhotoBox"
import Ul from "./Ul"
import Li from "./Li"

const Main = () =>{
    return(
        <>
            <Namebox>
                <H1>Hi,my name is</H1>
                <BigTitle>Brittany Chiang.</BigTitle>
                <SubTitle>I build thing for the Web.</SubTitle>
                <PararapheStartBox>
                <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <Span>Upstatement</Span>.</p>
                </PararapheStartBox>
                <Bouton>Check out my course!</Bouton>
            </Namebox>
            <AboutBox>
                <Title id="about">About me</Title>
                <AboutTextBox>
                    <ParagrapheAboutBox>
                        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

                        <p>Fast-forward to today, and I’ve had the privilege of working at <Span>an advertising agency, a start-up, a huge corporation, and a student-led design studio</Span>. My main focus these days is building accessible, inclusive products and digital experiences at <Span>Upstatement</Span> for a variety of clients.</p>

                        <p>I also recently <Span>launched a course</Span> that covers everything you need to build a web app with the Spotify API using Node & React.</p>

                        <p>Here are a few technologies I’ve been working with recently:</p>

                        <Ul>
                            <Li>JavaScript (ES6+)</Li>
                            <Li>TypeScript</Li>
                            <Li> React</Li>
                            <Li>Eleventy</Li>
                            <Li>Node.js</Li>
                            <Li>WordPress</Li>
                         
                        </Ul>

                    </ParagrapheAboutBox>
                    <PhotoBox>
                        <Img src={Photo} alt="Photo Brittany"/>
                    </PhotoBox>
                </AboutTextBox>
            </AboutBox>
        </>
    )
}

export default Main