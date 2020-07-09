import React from 'react';
import "../styles/about.css";
import seanconnery from "../images/shelf.jpg";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export default function About() {
    return (
        <div>
            
            <main className="container">
                <section className="row">
                <div className="col-md-8">
                    <article className="block">
                        <h1 className="block-header logo">About Me</h1>
                            <img src={seanconnery} 
                            data-toggle="tooltip" 
                            data-placement="bottom" 
                            title="Filler Photo Until I have a more professional one available" 
                            alt="" id="A Sean Connery Shelf Meme" 
                            className="me-photo"/>

                                <p>I am a Full Stack Web Developer. 
                                I have recently completed Case Western Reserve's Coding Bootcamp. 
                                I'm transitioning to a new careerfield, and look forward to learning and growing with your company.
                                </p>

                    <div>
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
                    </div>

                    </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
