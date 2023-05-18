import "./Footer.modules.css"
import facebook from "../../Assets/SocialMediaIcons/facebook.png"
import twitter from "../../Assets/SocialMediaIcons/twitter.png"
import instagram from "../../Assets/SocialMediaIcons/instagram.png"
import github from "../../Assets/SocialMediaIcons/github.png"
import linkedin from "../../Assets/SocialMediaIcons/linkedin.png"


const Footer = () => {
    return (
        <>
            <footer>

                <div className="footer-wrapper">

                    <div className="developer-info">
                        <p className="developer">Designed and developed by Rejcob</p>
                        <div className="social-icons">
                            <a href="https://github.com/Jcooob"><img src={github} alt="githubLogo" className="socialMediaIcon" /></a>
                            <a href="https://www.linkedin.com/in/jacobo-cohello-revolledo-096102251/"><img src={linkedin} alt="linkedin" className="socialMediaIcon" /></a>
                        </div>
                    </div>

                    <div className="about-link">
                        <a href="/about">About</a>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;