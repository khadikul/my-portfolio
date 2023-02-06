import React, { useRef } from 'react'

//import css
import './contacts.css';

//import emailjs
import emailjs from '@emailjs/browser';

//import icons
import Facebok from '../../assets/fb.png';
import Upwork from '../../assets/upwork.png';
import Fiverr from '../../assets/fiverr.png'

//import toastify alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mgeo57a', 'template_wtlbeg9', form.current, 'ADzsy_NFyVmjdMXwO')
    .then((result) => {
        toast.success('Email Send Success')
    }, (error) => {
        toast.error('Something With Wrong Please Try Again')
    });
    
    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contacts__container">
        <div className="contact__options">
          <article className='options__box'>
            <img className='fiverr' src={Fiverr} alt="" />
            <h4>Fiverr</h4>
            <h5>mdkhadikul</h5>
            <a href="https://fiverr.com/inbox/mdkhadikul" target='_blank'>Send a message</a>
          </article>
          <article className='options__box'>
            <img src={Upwork} alt="" />
            <h4>Upwork</h4>
            <h5>Md Khadikul Islam</h5>
            <a href="https://www.upwork.com/ab/messages/rooms/~015706530ad5419c61" target='_blank'>Send a message</a>
          </article>
          <article className='options__box'>
            <img src={Facebok} alt="" />
            <h4>Facebook</h4>
            <h5>Md Khadikul Islam</h5>
            <a href="https://www.messenger.com/t/100015347142188" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="" onSubmit={sendEmail} ref={form}>
          <input type="text" name='user_name' placeholder='your full name' required />
          <input type="email" name="user_email" placeholder='your email' />
          <textarea name="message" placeholder='write your message and send me' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <div>
        <ToastContainer />
      </div>
    </section>
  )
}

export default Contacts