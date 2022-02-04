import { useState } from 'react';


const Contact = () => {

    const [status, setStatus] = useState("Send message");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...")
        
        let { name, email, message } = e.target.elements;
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        if (!message) {
            alert("Please include a message");
            return
        }
        if (!email) {
            alert("Please include a return email address so I can get in contact with you");
            return
        }
        if (!name) {
            alert("Please include your name");
            return
        }

        let response = await fetch("/send_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Message Sent");
        let result = await response.json();
        // console.log(result);
        console.log(result.status);

        document.getElementById("contact-form").reset();
        setStatus("Send message");
    };
    
    return (
        <div className="contact-page">
            <h1>Contact</h1>
            <form id="contact-form" className="contact-form" method="POST" onSubmit={handleSubmit}>
                <div className="form-entries">
                    <label htmlFor='name'>Name</label>
                    <input className="contact-field" type="text" id="name" required/>

                    <label htmlFor='email'>Email Address</label>
                    <input className="contact-field" type="email" id="email" aria-describedby="emailHelp" required/>
                    
                    <label htmlFor='message'>Message</label>
                    <textarea className="contact-field" id="message" rows="10" required></textarea>
                </div>
                <br />
                <button type="submit" id="contact-submit">{status}</button>
            </form>
        </div>
    );
}
 
export default Contact;