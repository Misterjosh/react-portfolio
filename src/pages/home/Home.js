import React from 'react';
import "./home.css";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";
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
                                alt="A Sean Connery Shelf Meme" 
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
            </main>


<main>
    <section className="row">
        <div className="col-md-12">
            <article className="block">
                <Portfolio/>
            </article>
        </div>
    </section>
</main>

<main>
    <section className="row">
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

{/* <main>
    <section className="row">
        <div className="col-md-12">
            <article className="block">
                <div classname="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={linkedIn} className="card-img" alt="Github Logo" />
                        </div>
                        <div className="col-md-8">
                            <h5 className="card-title">My LinkedIn Profile</h5>
                            <p className="card-text">The button below will take you to my Linked in Profile. It will give you a better understanding of my employment history and education.</p>
                            <a href="https://github.com/Misterjosh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">To LinkedIn</a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</main>


<main className="container cards card-holder">
    <section className="row card-holder">
        <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card card-holder" style={{ width: "18rem" }}>
                <img src={github} className="card-img-top" alt="Github Logo" />
                <div className="card-body">
                    <h5 className="card-title">My Github Repo</h5>
                    <p className="card-title">A sample of my repo usage.</p>
                    <a href="https://github.com/Misterjosh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">My Repository</a>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
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
</main> */}

        </div>
    )
}
