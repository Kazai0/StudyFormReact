/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import { AiFillFacebook,AiFillGooglePlusCircle, AiFillLinkedin } from 'react-icons/ai'

import './Form.css'

export default () =>{

    const [formValues, setFormValues] = useState({})

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e)=>{
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
      
        const nameCorrect = data.name === 'x'
        const emailCorrect = data.email==='xy@com'
        const passwordCorrect = data.senha === 'y'
        

        if(nameCorrect && emailCorrect && passwordCorrect ){
            alert('informações corretas')
        }
        else{
            alert('informaçoes incorretas')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <div className="Icons">
                    <AiFillFacebook size={'40px'} />
                    <AiFillGooglePlusCircle size={'40px'} />
                    <AiFillLinkedin size={'40px'} />
                </div>
                
                <p>Or use your email registration  </p>
                
                <input type="text" placeholder="Name" name="name" onChange={handleInputChange}value={formValues.value} /> 
                <input type="text" placeholder="Email" name="email" onChange={handleInputChange}value={formValues.value}/>
                <input type="text" placeholder="Senha" name="senha" onChange={handleInputChange}value={formValues.value}/>
                
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}