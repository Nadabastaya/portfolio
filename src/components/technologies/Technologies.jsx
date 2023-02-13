import styled from 'styled-components'

import reactLogo from '../../assets/react.svg'
import javascript from '../../assets/images/logos/javascript.png'
import node from '../../assets/images/logos/node.png'
import express from '../../assets/images/logos/express.png'
import mongodb from '../../assets/images/logos/mongodb.png'

function Techonologies()    {
    return (
        <TechContainer>
            <TechImage src={javascript} alt="" />
            <TechImage src={reactLogo} className="logo react" alt="React logo" />
            <TechImage src={node} alt="" />
            <TechImage src={express} alt="" />
            {/* <TechImage src={mongodb} alt="" /> */}
        </TechContainer>
    )
}

const TechContainer = styled.div`
    background-color: #B5BCC6;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px;

    @media (max-width: 1024px)  {
        width: 100vw;
        padding: 20px 0;
    }

    @media (max-width: 414px)   {
        padding: 15px 0;
    }
`

const TechImage = styled.img`
    width: 150px;

    @media (max-width: 768px)  {
        width: 125px;
    }

    @media (max-width: 414px)   {
        width: 70px;
    }

    @media (max-width: 375px)   {
        width: 60px;   
    }
`
export default Techonologies