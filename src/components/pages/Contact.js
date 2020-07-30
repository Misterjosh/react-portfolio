import React from 'react';
import "../styles/contact.css";
import thankyou from "../images/thankyou.jpg";
import thumbsup from "../images/thumbsup.gif";

export default function Contact() {
    return (
        <div className="container">
            <main>
                <section className="row">
                    <div className="col-md-12">
                        <article className="block">
                            <h1 className="block-header">Contact Me</h1>
                            <div>
                            <img src={thankyou} 
                            data-toggle="tooltip" 
                            data-placement="bottom" 
                            title="Thanks for stopping by" 
                            alt="A thank you" id="A Sean Connery Shelf Meme" 
                            className="me-photo"/>
                            </div>
                            
                            <p className="non-header">If you like what you have seen, feel free to reach out to me. If you hate what you have seen, feel free to reach out anyway. I'm always happy to pass along a copy of my resume.</p>
                            <h2>Please Click a link below</h2>
                            <ul className="non-header">
                                <a href="mailto:defaultjosh@hotmail.com"><li>defaultjosh@hotmail.com</li></a>
                                <a href="mailto:defautjoshua@gmail.com"><li>defaultjoshua@gmail.com</li></a>
                                <a href="mailto:joshuaBrooks.developer@gmail.com"><li>joshuabrooks.developer@gmail.com</li></a>
                                <a href="https://github.com/Misterjosh"><li>Github Profile - Misterjosh</li></a>
                                <a href="https://www.linkedin.com/in/joshua-brooks-web-developer/"><li>LinkedIn - joshua-brooks-web-developer</li></a> 
                            </ul>
                            <div>
                             <img src={thumbsup} 
                            data-toggle="tooltip" 
                            data-placement="bottom" 
                            title="Thanks for stopping by" 
                            alt="A thank you" id="A Sean Connery Shelf Meme" 
                            className="notme-photo"/>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
