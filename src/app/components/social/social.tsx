//Components
import { EmailIconSocial } from "../icons-social/email"
import { GitHubIconSocial } from "../icons-social/github"
import { InstagramIconSocial } from "../icons-social/instagram"
import { LinkedinIconSocial } from "../icons-social/linkedin"

//Styles
import "./social.scss"


export function Social(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/luana-alves-nogueira-94ba62162/">
                <LinkedinIconSocial/>
            </a>
            <a href="https://github.com/devluannar">
                <GitHubIconSocial/>
            </a>
            <a href="">
                <EmailIconSocial/>
            </a>
            <a href="https://www.instagram.com/luluanalves/">
                <InstagramIconSocial/>
            </a>
        </div>
    )
}