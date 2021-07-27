import React from 'react';
import "./contact.css";
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_krcs1mi', 'template_itqjztq', e.target, 'user_qbYh1s7TricZ3clRTQPhQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      }
    return (
        <div className="container">
            <main>
                <section className="row">
                    <div className="col-md-12">
                        <article className="block">
                            <h1 className="block-header">Contact Me</h1>
                            <hr />
                            <form className="contact-form" onSubmit={sendEmail} style={{textAlign: "left"}}>
                                <div className="mb-3">
                                    <label for="name" style={{paddingRight: "5px"}}>Name: </label>
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" style={{paddingRight: "5px"}}>Email: </label>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label for="message" class="form-label">Message: </label>
                                    <textarea name="message" className="form-control" id="message" rows="5" placeholder="Something about an app, website, or job offer perhaps?"></textarea>
                                </div>
                                <input type="submit" value="Send" />
                            </form>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
