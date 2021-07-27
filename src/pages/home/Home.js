import React from 'react';
import "./home.css";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Portfolio from "../../components/portfolio/Portfolio";
import me from "../../images/joshuabrooks.jpg";
import bootcamp from "../../images/cwru-bootcamp.png";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";

export default function Home() {
    return (
        <div className="container cards">
            <main>
                <section className="row">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header logo">Joshua Brooks</h1>
                        <hr />
                        <div className="row">
                            <div className="col me-photo">
                                <img src={me} 
                                data-toggle="tooltip" 
                                data-placement="bottom" 
                                title="Me" 
                                alt="Joshua Brooks in front of a pine tree squinting once again" 
                                className=""
                                />
                            <p style={{textAlign: "center"}}>
                                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                More about me (Hobbies)
                                </Button>
                                <UncontrolledCollapse toggler="#toggler">
                                <Card>
                                    <CardBody>
                                    Baking desserts, blacksmithing, reading, playing games (board, card, and video),
                                    travel (domestic and intenational), attending comic book conventions, learning new things, and coding. Just to list a few.
                                    </CardBody>
                                </Card>
                                </UncontrolledCollapse>
                                </p>
                            </div>
                            <div className="col">
                                <a  href="https://bootcamp.case.edu/coding/"  
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src={bootcamp} 
                                        data-toggle="tooltip" 
                                        data-placement="bottom" 
                                        title="My Fullstack Developer Certification from Case Western Reserve University" 
                                        alt="Full Stack Web Development Certification from Case Western Reserve University for Joshua Brooks" 
                                        className=""
                                        style={{ border: "1px solid black"}}
                                    />
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                                <p>Hello there! I am Joshua, most call me Josh. I don't favor one over the other. I have transitioned to Full Stack Web Development from a career in Avation. </p>
                                <p>I currently develop using <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>. 
                                    I am trained as a <strong>M.E.R.N. Stack Developer</strong>. That is <strong>MySQL Express React Node</strong>, as well as <strong>MongoDB Express React Node</strong>. </p>
                                <p>I am self taught with <strong>Squarespace</strong>, and love <strong>Font Awesome</strong> and <strong>Bootstrap</strong>. You will find a portfolio containing some of my work below. </p>
                                <p>If you like what you see, use the form on my contact page to reach out to me. Thanks!</p>
                        </div>
                    </article>
                    </div>
                </section>
                <section className="row">
                    <div className="col-md-12">
                        <article className="block">
                            <Portfolio/>
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
