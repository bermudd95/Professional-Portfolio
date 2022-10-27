import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u2f5wlu', 'template_oq0mgol', form.current, 'dkSCkT9G1nrflBiqD')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
  return (
    <>
        <div className='m-5 d-flex justify-content-center align-items-center text-center'>
            <h2 className='fw-bold'>
                Contact Form
            </h2>
        </div>
        <Form className='pt-2 m-5 fw-bold' ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formFullName">
                <Form.Label>
                    Full Name:
                </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    name="user_name"
                />  
            </Form.Group>
            <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email" name="user_email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Phone Number:
                </Form.Label>
                <Form.Control type="phone number" placeholder="Phone Number" name="user_number" />
            </Form.Group>
            <Form.Group className="mb-3 pt-2" controlId="formBasicCheckbox">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={7} name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default ContactPage