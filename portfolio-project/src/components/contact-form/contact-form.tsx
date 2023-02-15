import React, { FunctionComponent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact-form.scss';

const ContactForm: FunctionComponent = () => {
	interface FormInfo {
		name: string,
		email: string,
		message: string
	};

	const form = useRef<HTMLFormElement>(null);
		
	const [formInfo, setFormInfo] = useState<FormInfo>({
		name: '',
		email: '',
		message: ''
	});
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		console.log(e.target.name)
    	setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  	};
	
	const sendEmail = (e: any) => {
	    e.preventDefault();
	 	if (form.current == null) return;
	    emailjs.sendForm('service_t9n6o9m', 'template_ebm37pp', form.current, 'IO_5P-XgKIY9jWUYR')
	     .then((result) => {
	         console.log("Message sent successfully!"); // Needs real implementation
	    }, (error) => {
	         console.log("There was an error sending your message!"); // Needs real implementation
	    });
    };
	return (
		<form ref={form} onSubmit={sendEmail}>
			<input 
				type="text" 
				name="name" 
				placeholder="Name" 
				className="form-control"
				value={formInfo.name}
				onChange={(e) => handleChange(e)}
				required 
			/>
			<input 
				type="email" 
				name="email" 
				placeholder="Email" 
				className="form-control"
				value={formInfo.email}
				onChange={(e) => handleChange(e)} 
				required 
			/>
			<textarea 
				name="message" 
				placeholder="Your message"
				className="form-control" 
				value={formInfo.message}
				onChange={(e) => handleChange(e)}
				required 
			/>
			<input type="submit" className="button-primary" value="Send" />
		</form>
	);
}

export default ContactForm;