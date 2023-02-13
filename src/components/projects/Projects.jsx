import styled from 'styled-components'
import home from '../../assets/images/projects/hollow-knight.png'  

function Projects() {
    return (
        <ProjectContainer>
            <ProcjectsTitle>Projects</ProcjectsTitle>
            <Project>
                <Title>Top-pify</Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit magnam, quia reiciendis unde quasi nihil adipisci veniam repudiandae dolorem in atque, provident animi iusto beatae alias, ab quidem quod praesentium tempore obcaecati quos explicabo. At dolorem accusantium explicabo id!
                    <ProjectImage src={home} alt="" />
                </Description>
            </Project>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`


    @media (max-width: 414px)   {
        width: 100vw;
        font-size: 20px;
        margin: 0;
    }
`

const ProcjectsTitle = styled.span`
    font-size: 50px;

    @media (max-width: 414px)   {
        
        font-size: 40px;
        
    }
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    
    

    @media (max-width: 1024px)  {
        gap: 25px;
    }

    @media (max-width: 768px)  {
        gap: 20px;
    }

    @media (max-width: 414px)   {
        width: 100vw;
        gap: 10px;
    }
    
`

const Title = styled.div`
    font-size: 45px;
    @media (max-width: 414px)   {
        font-size: 30px;
    }
`
const Description = styled.div`
    display: flex;
    gap: 50px;
    font-size: 35px;
    text-align: justify;
    padding: 0 250px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1440px)  {
        padding: 0 150px;
        font-size: 30px;
    }

    @media (max-width: 1024px)  {
        flex-direction: column-reverse;
        gap: 35px;
    }

    @media (max-width: 768px)  {
        gap: 30px;
        padding: 0 75px;
        font-size: 25px;
    }

    @media (max-width: 414px)   {
        
        gap: 15px;
        padding: 0 20px;
        font-size: 20px;
    }

`

const ProjectImage = styled.img`
    width: 400px;

    @media (max-width: 414px)   {
        width: 300px;
    }
`

export default Projects