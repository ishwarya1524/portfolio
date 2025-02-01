import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8fdc1f4c-2033-4c73-82ca-86cd4d0b8e0f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
    <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme}/>
    </div>
    <div className='contact-section'>
        <div className='contact-left'>
            <h1> Let's talk</h1>
            <p>this is the contact section for my website</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail}/><p>ishwaryap1524@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={call}/> <p>8610680549</p>
                </div>
                <div className='contact-detail'>
                    <img src={location}/> <p>Chennai, Tamilnadu</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Write your message</label>
            <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
            <button  type='submit' className='contact-submit'>Submit Now</button>
        </form>
    </div>
      
    </div>
  )
}

export default Contact
