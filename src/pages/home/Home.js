import React from 'react';
import "./home.css";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Portfolio from "../../components/portfolio/Portfolio";
import me from "../../images/joshuabrooks.jpg";

export default function Home() {
    return (
        <div className="container cards">
            <main>
                <section className="row">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header logo">About Me</h1>
                        <hr />
                        <div className="row">
                            <div className="col me-photo">
                                <img src={me} 
                                data-toggle="tooltip" 
                                data-placement="bottom" 
                                title="Filler Photo Until I have a more professional one available" 
                                alt="Joshua Brooks squinting once again" 
                                className=""/>
                            </div>
                            <div className="col">
                                <p className="non-header">Hello. I am Joshua Brooks, a Full Stack Web Developer. 
                                I have recently completed Case Western Reserve University's Coding Bootcamp. 
                                I'm transitioning to a new careerfield, and look forward to learning and growing with your company.
                                </p>
                                <p><a href="https://docs.google.com/document/d/e/2PACX-1vR7wq8xjYManvf_xwTVXhRIzRmzaMno6gZ_fMUMdMbsynTuEnXwojPzef3BZvyZ4Q/pub" target="_blank" rel="noopener noreferrer">Here is a link to my resume</a>
                                </p>
                                <br />
                                <p>
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
                                </p>
                            </div>
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
