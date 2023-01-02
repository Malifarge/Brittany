import Bouton from "./Button"
import Li from "./Li"
import Link from "./Link"
import Ol from "./Ol"

const Nav = () =>{
    return(
        <nav>
            <Ol>
                <Li><Link href="/#about">About</Link></Li>
                <Li><Link href="/#experience">Experience</Link></Li>
                <Li><Link href="/#work">Work</Link></Li>
                <Li><Link href="/#contact">Contact</Link></Li>
                <Bouton littlesize="0.75rem 1rem;">Resume</Bouton>
            </Ol>
        </nav>
    )
}

export default Nav