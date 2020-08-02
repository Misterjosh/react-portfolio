import React from 'react';
import "./portfolio.css";
import dayplanner from "../../images/DayPlanner.png";
import translator from "../../images/TranslationApp.png";
import weather from "../../images/WeatherApp.png";
import timecapsule from "../../images/timecapsule/timecapsule1.png";
import chickentinder from "../../images/chickentinder.png";

export default function Portfolio() {
    // const photoFiller = "https://via.placeholder.com/350x350";
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header">My Portfolio</h1>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Homework%2005%20-%20Weekday%20Scheduler%20(3rd%20Party%20APIs)/Develop/index.html" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img className="shadow img-fluid port-image" target="_blank" src={dayplanner} alt="Day planner"></img>
                                </a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>Work Day Scheduler</h5>
                                    <p>This app uses <span className="spanb">HTML5</span>, <span className="spanb">CSS3</span>, <span className="spanb">JavaScript</span>, 
                                        <span className="spanb"> Bootstrap</span>, <span className="spanb">Local Storage</span>, and the <span className="spanb">Moment.js</span> library. 
                                        It is a day planner that you can assign messages to.
                                    </p>
                                    <p>
                                        The image has an imbedded link to the app. The code is available on 
                                        <a href="https://github.com/Misterjosh/Misterjosh.github.io/tree/master/Homework%2005%20-%20Weekday%20Scheduler%20(3rd%20Party%20APIs)" 
                                        target="_blank" 
                                        rel="noopener noreferrer"> Github
                                        </a>.
                                    </p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Homework-06-WeatherApp/index.html" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img className="shadow img-fluid port-image" target="_blank" src={weather} alt="Weather Dashboard"></img>
                                </a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>Weather Dashboard</h5>
                                    <p>This app uses <span className="spanb">HTML5</span>, <span className="spanb">JavaScript</span>, <span className="spanb">Bootstrap</span>, 
                                        <span className="spanb"> Local Storage</span>, <span className="spanb">Openweather API</span>, and <span className="spanb">Axios</span> to make API calls.
                                        It gets the weather by city. It displays the current weather, 5 day forcast, and UV index.
                                    </p>
                                    <p>
                                        The image has an imbedded link to the app. The code is available on 
                                        <a href="https://github.com/Misterjosh/Misterjosh.github.io/tree/master/Homework-06-WeatherApp" target="_blank" rel="noopener noreferrer"> Github</a>.
                                    </p> 
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Project-1%20-translation-app/index.html" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img className="shadow img-fluid port-image" target="_blank" src={translator} alt="What did you say? Translation app"></img>
                                </a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>What did you say?</h5>
                                    <p>This app uses <span className="spanb">HTML5</span>, <span className="spanb">CSS3</span>,<span className="spanb"> JavaScript</span>, 
                                        <span className="spanb"> Bootstrap</span>, <span className="spanb">Yandex API</span>, <span className="spanb">Google Books API</span>, 
                                        <span className="spanb"> Giphy API</span>, and <span className="spanb">Axios</span> to make API calls.
                                    </p>
                                    <p>
                                        This app allows you to translate from English to Chinese or Spanish.
                                    </p>
                                    <p>
                                        The image has an imbedded link to the app. This was my first group project. We managed it poorly on Github and all the commits are under one person(not me). 
                                        I uploaded a copy of our work to my repository. The code is available on 
                                        <a href="https://github.com/Misterjosh/Misterjosh.github.io/tree/master/Project-1%20-translation-app" target="_blank" rel="noopener noreferrer"> Github</a>.
                                    </p> 
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/timecapsule" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="shadow img-fluid port-image" target="_blank" src={timecapsule} alt="Time capsule"></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>Time Capsule</h5>
                                    <p>This app uses <span className="spanb">HTML5</span>, <span className="spanb">CSS3</span>, <span className="spanb">JavaScript</span>,  
                                    <span className="spanb"> Bootstrap</span>, a <span className="spanb">MySQL Database</span>, the <span className="spanb">Handlebars </span> 
                                    templating engine, <span className="spanb">OMDb API</span>, and <span className="spanb">Axios</span> to handle API calls. The server is a
                                    <span className="spanb"> Node</span> server, controlled by <span className="spanb">Express</span> and controls the database with <span className="spanb">Sequelize</span>.
                                    </p>
                                    <p>
                                    We wanted to make a digital time capsule. You could put images, messages, and videos in. You would choose who to send it to, 
                                    pick a date to have it delivered, seal it, and it would be stored until delivery date.
                                    </p>
                                    <p>We didn't get it completed or hosted. The image links to a page I made to describe and show what we did get done.
                                    The code is available on <a href="https://github.com/JamesWalterHudeck/Project2-timeCapsule" target="_blank" rel="noopener noreferrer">Github</a>. 
                                    </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="shadow img-fluid port-image" target="_blank" src={chickentinder} alt="Chicken Tinder"></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>Chicken Tinder</h5>
                                <p>This app uses <span className="spanb">JSX</span>, <span className="spanb">CSS3</span>, <span className="spanb">JavaScript</span>,  
                                    <span className="spanb"> Bootstrap</span>, <span className="spanb">Reactstrap</span>, <span className="spanb">React</span>, a <span className="spanb">MongoDB</span> database,
                                    <span className="spanb"> OpenTable API</span>, and <span className="spanb">Axios</span> to handle API calls. The server is a
                                    <span className="spanb"> Node</span> server, controlled by <span className="spanb">Express</span> and controls the database with <span className="spanb">Mongoose</span>.
                                </p>
                                <p>
                                    We wanted to make an app that allows people that can't decide on where to eat, pick a group of 5 places they like. Then compares the results and shows results if they have a match.
                                </p>
                                <p>
                                    It isn't hosted yet, but the code is available on <a href="https://github.com/BethanyWebb/Final" target="_blank" rel="noopener noreferrer">Github</a>.
                                </p>
                            </div>
                        </div>
                        {/* <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/" data-toggle="tooltip" data-placement="top" title="" >
                                    <img className="shadow img-fluid port-image" target="_blank" src={photoFiller} alt=""></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>Lorem ipsum</h5>
                            </div>
                        </div> */}
                    </article>
                </div>
            </main>
        </div>
    )
}