import React from 'react';
import "./portfolio.css";
import translator from "../../images/TranslationApp.png";
import weather from "../../images/WeatherApp.png";
import timecapsule from "../../images/timecapsule1.png";
import chickentinder from "../../images/chickentinder.png";
// if needed const photoFiller = "https://via.placeholder.com/350x350";

export default function Portfolio() {
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header">My Portfolio</h1>
                        <hr />
                        <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Homework-06-WeatherApp/index.html" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img loading="lazy" className="shadow" target="_blank" src={weather} alt="Weather Dashboard"></img>
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
                                        <a href="https://github.com/Misterjosh/weather-dashboard-redone" target="_blank" rel="noopener noreferrer"> Github</a>.
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
                                    <img loading="lazy" className="shadow" target="_blank" src={translator} alt="What did you say? Translation app"></img>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <h5>What did you say?</h5>
                                    <p>This app uses <span className="spanb">HTML5</span>, <span className="spanb">CSS3</span>,<span className="spanb"> JavaScript</span>, 
                                        <span className="spanb"> Bootstrap</span>, <span className="spanb">Yandex API</span>, <span className="spanb">Google APIs</span>
                                        , and <span className="spanb">Axios</span> to make API calls.
                                    </p>
                                    <p>
                                        This app translates from English to 93 other languages. If it doesn't, the monthly API call limit has been reached.
                                    </p>
                                    <p>
                                        This was my first group project. In order to make it my own, started over and wrote all the code. Heavy refactoring on the Java Script. My code is available on 
                                        <a href="https://github.com/Misterjosh/translation-app-upgrade" target="_blank" rel="noopener noreferrer"> Github</a>. Feel free to look at my work.
                                    </p> 
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                                    <img loading="lazy" className="shadow img-fluid port-image" target="_blank" src={timecapsule} alt="Time capsule"></img>
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
                                    <p>We didn't get it completed or hosted. It wasn't my repo and will most likely never be functional. 
                                    My code is available on <a href="https://github.com/JamesWalterHudeck/Project2-timeCapsule" target="_blank" rel="noopener noreferrer">Github</a>. 
                                    </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                    <img loading="lazy" className="shadow img-fluid port-image" target="_blank" src={chickentinder} alt="Chicken Tinder"></img>
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
                                    It isn't hosted(not my repo again). If you want, I can demo it locally. Also, the code is available on <a href="https://github.com/BethanyWebb/Final" target="_blank" rel="noopener noreferrer">Github</a>.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}