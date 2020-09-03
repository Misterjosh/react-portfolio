import React from 'react';
import "./contact.css";
import thankyou from "../../images/thankyou.jpg";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";

export default function Contact() {
    return (
        <div className="container">
            <main>
                <section className="row">
                    <div className="col-md-12">
                        <article className="block">
                            <h1 className="block-header">Contact Me</h1>
                            <hr />
                            <img src={thankyou} 
                                    data-toggle="tooltip" 
                                    data-placement="bottom" 
                                    title="Thanks for stopping by" 
                                    alt="A neon light of the words thank you"
                                    className=""/>
                                    <h3 className="non-header">If you like what you've seen, you can reach me at <a href="mailto:defautjoshua@gmail.com">defaultjoshua@gmail.com</a>.</h3>
                            {/* <h4>Please Click a link below</h4> */}
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {/* <img src={thankyou} 
                                    data-toggle="tooltip" 
                                    data-placement="bottom" 
                                    title="Thanks for stopping by" 
                                    alt="A neon light of the words thank you"
                                    className=""/> */}
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                {/* <ul className="non-header"> */}
                                    {/* <li><a href="mailto:defaultjosh@hotmail.com">defaultjosh@hotmail.com</a></li> */}
                                    {/* <li> */}
                                        {/* <a href="mailto:defautjoshua@gmail.com">defaultjoshua@gmail.com</a> */}
                                    {/* </li> */}
                                    {/* <li><a href="mailto:joshuaBrooks.developer@gmail.com">joshuabrooks.developer@gmail.com</a></li> */}
                                {/* </ul> */}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="row bottom">
                    <div className="col-md-12">
                        <article className="block">
                            <div classname="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-sm-4 col-md-4 col-lg-2">
                                    <img src={github} className="card-img" alt="Github Logo" />
                                    </div>
                                    <div className="col-sm-8 col-md-8 col-lg-4">
                                        <h5 className="card-title">My Github Repository</h5>
                                        <p className="card-text">My Github user name is Misterjosh. The button below will take you to my personal repository. There you can check out my coding and projects.</p>
                                        <a href="https://github.com/Misterjosh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">To Github</a>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-2">
                                    <img src={linkedIn} className="card-img" alt="Github Logo" />
                                    </div>
                                    <div className="col-sm-8 col-md-8 col-lg-4">
                                        <h5 className="card-title">My LinkedIn Profile</h5>
                                        <p className="card-text">The button below will take you to my Linked in Profile. It will give you a better understanding of my employment history and education.</p>
                                        <a href="https://www.linkedin.com/in/joshua-brooks-web-developer/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">To LinkedIn</a>
                                    </div>
                                </div>
                            </div> 
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
