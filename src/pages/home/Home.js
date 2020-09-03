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
                        <h1 className="block-header logo">Joshua Brooks</h1>
                        <hr />
                        <div className="row">
                            <div className="col me-photo">
                                <img src={me} 
                                data-toggle="tooltip" 
                                data-placement="bottom" 
                                title="Me" 
                                alt="Joshua Brooks in front of a pine tree squinting once again" 
                                className=""/>
                            </div>
                            <div className="col">
                                <p className="non-header">Full Stack Web Developer with extensive experience in Aviation. </p>
                                <p className="non-header">Trained at Case Western Reserve University’s Coding Bootcamp. </p>
                                <p className="non-header">Earned a Certificate in Full Stack Web Development. </p>
                                <p className="non-header">Looking to transfer applied experience with Hard Deadlines, Demanding and Diverse Clientele, and Quickly Adapting to Resolve Unknown and Persistent Issues. </p>
                                <p className="non-header">Mixing past experience with new knowledge of Building Responsive Web Sites, Writing Highly Functional JavaScript, and Manipulating a variety of Databases.
                                </p>
                                <p ><a href="https://docs.google.com/document/d/e/2PACX-1vR7wq8xjYManvf_xwTVXhRIzRmzaMno6gZ_fMUMdMbsynTuEnXwojPzef3BZvyZ4Q/pub" target="_blank" rel="noopener noreferrer">Here is a link to my resume</a>
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
