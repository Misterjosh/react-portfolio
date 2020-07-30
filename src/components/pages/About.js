import React from 'react';
import "../styles/about.css";
import seanconnery from "../images/shelf.jpg";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";


export default function About() {
    return (
        <div className="container cards">
            
            <main>
                <section className="row">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header logo">About Me</h1>
                            <img src={seanconnery} 
                            data-toggle="tooltip" 
                            data-placement="bottom" 
                            title="Filler Photo Until I have a more professional one available" 
                            alt="A Sean Connery Shelf Meme" 
                            className="me-photo"/>

                                <p className="non-header">Hello. I am Joshua Brooks. I am a Full Stack Web Developer. 
                                I have recently completed Case Western Reserve University's Coding Bootcamp. 
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
            
<main className="container cards card-holder">
    <section className="row card-holder">
        <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card card-holder" style={{ width: "18rem" }}>
                <img src={github} className="card-img-top" alt="Github Logo" />
                <div className="card-body">
                    <h5 className="card-title">My Github Repo</h5>
                    <p className="card-title">A sample of my repo usage.</p>
                    <a href="https://github.com/Misterjosh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">My Repository</a>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card card-holder" style={{ width: "18rem" }}>
                <img src={linkedIn} className="card-img-top" alt="Github Logo" />
                <div className="card-body">
                    <h5 className="card-title">My LinkedIn Profile</h5>
                    <p className="card-title">My Employment History.</p>
                    <a href="https://www.linkedin.com/in/joshua-brooks-239a331a1/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">To LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
</main>

        </div>
    )
}
