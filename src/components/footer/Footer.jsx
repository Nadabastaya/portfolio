import styled from 'styled-components'
import GithubIcon from '../../assets/images/github.png'
import LinkedinIcon from '../../assets/images/linkedin.png'
function Footer() {
    return (
        <FooterContainer>
            <SocialMediaContainer>
                    <Icon src={GithubIcon} alt="" />
                    <Icon src={LinkedinIcon} alt="" />
                </SocialMediaContainer>    
            <Copyright>Copyright © 2023 Nadabastaya</Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    gap: 10px;
`
const SocialMediaContainer = styled.div`
    
    display: flex;
    gap: 25px;
    padding-left: 9px;
`
const Icon = styled.img`
    width: 40px;
`

const Copyright = styled.div`

`
export default Footer