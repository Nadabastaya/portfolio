import styled from 'styled-components'
import standing from '../../assets/images/stand-avatar.png'

function Contact()  {
    return (

        <ContactContainer>
            <ContactDescription>
            <h1>Contact me</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, deleniti.</p>
            </ContactDescription>
            <ContactForm>
            <ContactImage src={standing} alt="" />
            <Form action="">
                <input type="text" />
                <input type="email" name="" id="" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>contactme</button>
            </Form>
            </ContactForm>
           
            
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const ContactDescription = styled.div`
    display: flex;
    flex-direction: column;
`

const ContactImage = styled.img`
    
`
const ContactForm = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 25px;

    @media (max-width: 414px)   {
        padding: 0 ;
        gap: 0;
    }
`


const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`


export default Contact