import styled from 'styled-components'
import Avatar from '../../assets/images/avatar.png'


function About() {
    return (
    <AboutContainer>
        <AvatarContainer src={Avatar} alt="" />
        <TextContainer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at nobis doloremque sed suscipit culpa eaque nam temporibus placeat expedita! Inventore explicabo, amet nesciunt ex consectetur voluptas consequuntur exercitationem animi ipsam mollitia! Eos minima blanditiis, labore consequatur earum debitis sit.
        </TextContainer>

    </AboutContainer>)
}

const AboutContainer = styled.div`
    background-color: #801185;
    padding: 50px 300px;

    display: flex;
    gap: 20px;

    @media (max-width: 1440px)  {
        padding: 0;
    }

    @media (max-width: 1024px)  {
        width: 100vw;
        padding: 0;
    }

    @media (max-width: 414px)   {
        gap: 0;
    }




`

const AvatarContainer = styled.img`

    @media (max-width: 1440px)  {
        padding: 50px;
    }
    @media (max-width: 1024px)  {
        width: 275px;
        padding-left: 50px;
    }

    @media (max-width: 768px)  {
        width: 250px;
        padding-left: 0;
    }

    @media (max-width: 414px)   {
        width: 125px;
        padding: 10px;
    }

    @media (max-width: 375px)   {
        width: 100px;   
        padding: 5;
    }

`

const TextContainer = styled.div`
    color: #B5BCC6;
    font-size: 25px;
    text-align: justify;
    display:flex;
    place-items: center;

    @media (max-width: 1440px)  {
        padding: 50px;
    }

    @media (max-width: 1024px)  {
        width: 100vw;
        padding: 0;
        padding-right: 50px;
    }


    @media (max-width: 768px)  {
        font-size: 20px;
    }

    @media (max-width: 414px)   {
        font-size: 15px;
        padding: 10px;
    }

    @media (max-width: 375px)   {
        padding: 5px;
        font-size: 13px;   
    }
`

export default About