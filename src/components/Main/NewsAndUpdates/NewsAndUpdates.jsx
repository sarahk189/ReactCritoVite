import React, { useState, reset} from 'react'
import Button from '../../generics/Button'
import img_newsSquiggly from '../../../assets/images/background-wavy-lines.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const NewsAndUpdates = () => {

    const emailRegEx = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const [errorMessage, setErrorMessage] = useState('')
    const form = useFormik({
        initialValues: {
        email: ''
        },

        validationSchema: Yup.object( {
            email: Yup.string()
                .required('You must enter an e-mail addess')
                .matches(emailRegEx, 'You must enter a valid e-mail addess')
        }),

        onSubmit: (values, {resetForm} ) => {

            switch (result.status) {
                case email === emailRegEx:
                    alert("You've been Subscribed!")
                    break;
                case email !== emailRegEx:
                    setErrorMessage('Enter a vaild email!')
                    break;
            }
            
            resetForm({ values: ''})
        }
    })

  return (
    <section className="news-updates-signup">

            <div className="container">

                <h2>Get News Updates By Signup</h2>

                <form className="email-signup" id="subscribeForm" onSubmit={form.handleSubmit} noValidate>
                    <div className='email-error'>
                    <input type='email' title='email' name='email' placeholder="username@domain.com" value={form.values.email} onChange={form.handleChange} onKeyUp={form.handleChange}/>
                    <span id='error'>{form.errors.email}</span>
                    </div>
                    <button type='submit' className='subscribe-btn'>Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
                
                <div className="news-squiggly">
                    <img src={img_newsSquiggly} alt="grey wavy lines to the right" />
                </div>
                
            </div>
        </section>
  )
}

export default NewsAndUpdates