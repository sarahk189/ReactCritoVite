import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const form = useFormik({
        initialValues: {
        name: '',
        email: '',
        message: '' 
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required('You must add a name')
                .min(2, 'Name must be a minimum of two letters'),
            email: Yup.string()
                .required('You must enter an e-mail addess')
                .email('You must enter a valid e-mail addess'),
            message: Yup.string()
                .required('You must add a message')
                .min(2, 'Add a valid message')
        }),

        onSubmit: async (values) => {
                
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                }, 
                body: JSON.stringify(values)
            })
            console.log(result.status)

            switch (result.status) {
                case 200:
                    alert('Message Sent!')
                    break;
                case 400:
                    setErrorMessage('Something went wrong!')
                    break;
                case 409:
                    setErrorMessage('')
                    break; 
            }
        }
    
    })
  
    return (

    <section className="contact-form">

        <div className="container">

            <div className="form-title">
                <h3>Leave us a message for any information.</h3>
            </div>

            <form id="messageForm" onSubmit={form.handleSubmit} noValidate>
                <p className='errorMessage'></p>
                <div className="mb-3">
                    <input tabIndex="1" type='text' name='name' title='name' placeholder='Name' value={form.values.name} onChange={form.handleChange} onKeyUp={form.handleChange}/>
                    <span id='name-error'>{form.errors.name}</span>
                </div>
                
                <div className="mb-3">
                    <input tabIndex="2" type='email' name='email' title='email' placeholder='E-mail' value={form.values.email} onChange={form.handleChange} onKeyUp={form.handleChange}/>
                    <span id='email-error'>{form.errors.email}</span>
                </div>
                
                <div className="mb-8">
                    <input tabIndex="3" type='text' name='message' title='message' placeholder='Message' value={form.values.message} onChange={form.handleChange} onKeyUp={form.handleChange}/>
                    <span id='message-error'>{form.errors.message}</span>
                </div>
                
                <button className='btn-yellow' type='submit' >Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
            
        </div>
    </section>
  )
}

export default ContactForm