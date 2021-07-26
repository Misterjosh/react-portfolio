import React from 'react';
import "./home.css";
// import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Portfolio from "../../components/portfolio/Portfolio";
import me from "../../images/joshuabrooks.jpg";
import bootcamp from "../../images/cwru-bootcamp.png"

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
                                {/* <p>
                                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                Hobbies
                                </Button>
                                <UncontrolledCollapse toggler="#toggler">
                                <Card>
                                    <CardBody>
                                    Baking desserts, blacksmithing, reading, playing games (board, card, and video),
                                    travel (domestic and intenational), attending comic book conventions, learning new things, and coding. Just to list a few.
                                    </CardBody>
                                </Card>
                                </UncontrolledCollapse>
                                </p> */}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                                <p>Hello there! I am Joshua, most call me Josh. I don't favor one over the other.</p> 
                                <p>I have transitioned to Full Stack Web Development from a career in Avation.</p>
                                <p>I currently develop using <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>. 
                                    I am trained as a <strong>M.E.R.N. Stack Developer</strong>. 
                                    That is <strong>MySQL Express React Node</strong>, as well as <strong>MongoDB Express React Node</strong>.</p>
                                <p>You will find a portfolio containing some of my work below.</p>
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
            </main>
        </div>
    )
}
