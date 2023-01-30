import React, { useState } from 'react'
import './From.css'

const Form = () => {
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [email, setemail] = useState('')
    const [vaildFname, setvalidFname] = useState('')
    const [validLname, setvalidLname] = useState('')
    const [validEmail, setValidemail] = useState('')
    const [suscessStatus, setStatus] = useState(false)
    // const {firstName,lastName, email} = fromData;
    function submitForm(e){
        e.preventDefault()  
        console.log(Fname, Lname, email)  
        if(Fname === '') setvalidFname('not a Vaid NAME')
        if(Lname === '') setvalidLname('not a valid LAST name')
        if(email === '') setValidemail('not a valid LAST name')
        console.log(vaildFname, validLname , validEmail)
        if(Fname !== '' && Lname !== '' && email !== '') setStatus(true)
        
    }
    function setNameFunction(e){
        setFname(e.target.value)
        if(e.target.value !== '') setvalidFname('')
    }
    function setLastNameFunction(e){
        setLname(e.target.value)
        if(e.target.value !== '') setvalidLname('')
    }  
    function setemaitFunction(e){
        setemail(e.target.value)
        if(e.target.value !== '') setValidemail('')
    }
  return (
    <div className='container'>
        <form action="Post" 
         onSubmit={submitForm} 
         > 
            <h3>{`${suscessStatus} ? "from Submited"}`}</h3>
            <input type="text" 
            id='firstName' 
            placeholder='First Name'
            onChange={(e)=>setNameFunction(e)}
            /> <br />
            <p>{vaildFname}</p>
            <input type="text" 
            id='lastName' 
            placeholder='Last Name'
            onChange={(e)=>setLastNameFunction(e)}
            /><br />    
            <p>{validLname}</p>
            <input type="text"
             id='email'
             placeholder='Email'
             onChange={(e)=>setemaitFunction(e)}
             /> <br />
             <p>{validEmail}</p>

            <button >Register</button>
        </form>
        
      
    </div>
  )
}

export default Form;


