import React  from 'react'
import './Contact.css'
import Swal from 'sweetalert2';
import { SiLinkedin,SiGithub, SiFacebook } from "react-icons/si";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "05d70245-6d55-48fb-885a-20ac72a2184b");
    
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
            Swal.fire({
                title: "message sent successfully!",
                icon: "success",
                draggable: true
              });
        }
      };

  return (
    <>
      <div className="contact" id='project'>
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <img src='contact.jpeg' alt='contact' className='image'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                        <div className="card2 d-flex card border-0 px-4 py-5">
                        <div className="row">
                            <div className="row">
                            <h6>Contact with icons
                            <SiLinkedin color='blue' size={30} className='ms-2'/>
                            <SiGithub  color='black' size={30} className='ms-2' />
                            <SiFacebook  color='blue' size={30} className='ms-2' />
                            </h6>
                             </div>
                        <div className="row px-3 mb-4">
                            <div className="line" />
                                <small className="or text-center">OR</small>
                            <div className='line'/>
                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                    <div className="row px-3">
                    
                        <input type="text"
                         name='name' 
                         placeholder='Enter your name'
                          className='mb-3'
                          required
                          />
                    </div>
                    <div className="row px-3">
                        <input type="text"
                         name='email' 
                         placeholder='Enter your email address'
                          className='mb-3'
                          required
                           />
                    </div>
                    <div className="row px-3">
                        <input type="text" 
                        name='message'
                         placeholder='write your address' 
                         className='mb-3'
                         required
                        
                         />
                    </div>
                    <div className="row px-3">
                       <button>SEND ME</button>
                    </div>
                    </form>
                </div>
             </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
