import React, { 
	FunctionComponent, useRef, useState, FormEvent 
} from 'react';
import emailjs from '@emailjs/browser';
import apiData from './contact-api-data';
import './contact-form.scss';

const ContactForm: FunctionComponent = () => {
	interface FormInfo {
		name: string,
		email: string,
		message: string,
		error: boolean | null
	};

	const form = useRef<HTMLFormElement>(null);
		
	const [formInfo, setFormInfo] = useState<FormInfo>({
		name: '',
		email: '',
		message: '',
		error: null
	});
	
	const handleChange = (
		e: 
		React.ChangeEvent<HTMLInputElement> | 
		React.ChangeEvent<HTMLTextAreaElement>
	): void => {
    	setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  	};
	
	const hideFeedbackMessage = (): void => {
		setFormInfo({ name: '', email: '', message: '', error: null });
	}

	const setTimer = (): void => {
		setTimeout(hideFeedbackMessage, 5000);
	}

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
	    e.preventDefault();

	 	if (form.current == null) return;
	    emailjs.sendForm(apiData.service, apiData.template, form.current, apiData.key)
	     .then((result) => {
	        setFormInfo({ ...formInfo, error: false });
	    }, (error) => {
	        setFormInfo({ ...formInfo, error: true });
	    }).finally(setTimer);
    };

	return (
		<div id="contact-form">
			<form ref={form} onSubmit={sendEmail}>
				<input 
					type="text" 
					name="name" 
					placeholder="Name" 
					className="form-control"
					value={formInfo.name}
					onChange={handleChange}
					required 
				/>
				<input 
					type="email" 
					name="email" 
					placeholder="Email" 
					className="form-control"
					value={formInfo.email}
					onChange={handleChange} 
					required 
				/>
				<textarea 
					name="message" 
					placeholder="Your message"
					className="form-control" 
					value={formInfo.message}
					onChange={handleChange}
					required 
				/>
				<input type="submit" className="button-primary" value="Send" />
			</form>
			{	formInfo.error !== null && 
				<div className="form-feedback-message">
					{ 
						formInfo.error
							? <div className="error">There was a problem sending your message, please try again.</div>
							: <div className="success">Your message has been sent successfully!</div>			 
					}
				</div>
			}
		</div>
	);
}

export default ContactForm;