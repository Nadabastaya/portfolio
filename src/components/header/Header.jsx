import styled from 'styled-components'

import HeaderAvatar from '../../assets/images/avatar-2.png'
import GithubIcon from '../../assets/images/github.png'
import LinkedinIcon from '../../assets/images/linkedin.png'

function Header()   {
    return (
        <HeaderContainer>
            <TitleContainer>
                I'm Camilo, <TitleStyled>Fullstack Developer</TitleStyled> 
                <SocialMediaContainer>
                    <Icon src={GithubIcon} alt="" />
                    <Icon src={LinkedinIcon} alt="" />
                    <Button>View my CV</Button>
                </SocialMediaContainer>    
            </TitleContainer>
            <ImageContainer><Avatar src={HeaderAvatar} alt="" /></ImageContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top: 75px;
    padding: 50px 0;

    @media (max-width: 1024px)  {
        width: 100vw;
        margin-top: 0;
    }

    
`

const TitleContainer = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    display: grid;
    align-content: center;
    justify-content: start;
    font-size: 7rem;
    font-weight: bold;
    text-align: left;
    padding-left: 200px;

   
    @media (max-width: 1024px)  {
        padding-left: 30px;
    }

    @media (max-width: 768px)  {
        font-size: 5rem;
    }

    @media (max-width: 414px)   {
        font-size: 2rem;   
    }

    @media (max-width: 375px)   {
        font-size: 1.8rem;
    }
`
const TitleStyled = styled.span`
    color: #47014A

    
`

const ImageContainer = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    display: grid;
    align-content: center;
    justify-content: start;

    @media (max-width: 1024px)  {
        padding-right: 30px;
    }
`

const Avatar = styled.img`
    width: 350px;

    @media (max-width: 768px)  {
        width: 250px;
    }

    @media (max-width: 414px)   {
        width: 175px;   
    }

    @media (max-width: 375px)   {
        width: 150px;   
    }
`

const SocialMediaContainer = styled.section`
    
    display: flex;
    gap: 10px;
    padding-left: 9px;

    @media (max-width: 414px)   {
        padding-left: 2px;
        gap: 3px;
        padding-top: 5px;
    }

    
`
const Icon = styled.img`
    width: 50px;

    @media (max-width: 414px)   {
        width: 35px;
    }

    @media (max-width: 375px)   {
        width: 30px;   
    }
`

const Button = styled.button`
    background-color: #000000;
    border: none;
    border-radius: 5px;
    padding: 10px;


`

export default Header