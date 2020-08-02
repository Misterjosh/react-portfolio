import React from 'react';
import "./timecapsule.css";
import tc1 from "../../images/timecapsule/timecapsule1.png";
import tc2 from "../../images/timecapsule/timecapsule2.png";
import tc3 from "../../images/timecapsule/timecapsule3.png";
import tc4 from "../../images/timecapsule/timecapsule4.png";
import tc5 from "../../images/timecapsule/timecapsule5.png";
import tc6 from "../../images/timecapsule/timecapsule6.png";
import tc7 from "../../images/timecapsule/timecapsule7.png";
import tc8 from "../../images/timecapsule/timecapsule8.png";
import tc9 from "../../images/timecapsule/timecapsule9.png";


export default function Timecapsule() {
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header">Time Capsule</h1>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc1} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    This is the landing page. We didn't get around to setting up the sign in, but the login would redirect you to the user page.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc2} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    The rest of the page shows the types of media you could store in the time capsule.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc3} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    If you selected the login on the home page, you woud be taken here.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc4} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    Successful login would then bring you to your user page. There you would see time capsules you have in work. You would have the options to edit, delete, or close the capsule.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc5} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    Scrolling further down your user page would bring you to options on three types of capsules. We built out the capsule for yourself. The "For Others" and "As a Group" were for future development.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc6} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    Here we have the input to name the capsule and the option of uploading items to save in it.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc7} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    We had a section to select a favorite movie. It would store the poster from its release in the capsule.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc8} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    This is an area to create a letter to put in the capsule. It was meant as instructions to the recipient(s). 
                                    We also set up this calandar component to allow you to choose a later time to send the unlock code for the capsule (we didn't get the lock/unlock part working).
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                    <img className="shadow img-fluid port-image" src={tc9} alt="Day planner"></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    The last part was creating a key for your timecapsule. You had the opion to save your progress, or if all your field had inputs you could seal it.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}
