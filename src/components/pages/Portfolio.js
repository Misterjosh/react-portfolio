import React from 'react';
import "../styles/portfolio.css";
import dayplanner from "../images/DayPlanner.png";
import translator from "../images/TranslationApp.png";
import weather from "../images/WeatherApp.png";


export default function Portfolio() {
    const photoFiller = "https://via.placeholder.com/350x350";
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-8">
                    <article className="block">
                        <h1 className="block-header">My Portfolio</h1>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Homework%2005%20-%20Weekday%20Scheduler%20(3rd%20Party%20APIs)/Develop/index.html" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid port-image" src={dayplanner} alt="My day planner app"></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Homework-06-WeatherApp/index.html" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid port-image" src={weather} alt="My day planner app"></img></a> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="https://misterjosh.github.io/Project-1%20-translation-app/index.html" data-toggle="tooltip" data-placement="top" title="" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid port-image" src={translator} alt="My day planner app"></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/portfolio" data-toggle="tooltip" data-placement="top" title="" >
                                    <img className="img-fluid port-image" src={photoFiller} alt="My day planner app"></img></a> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/portfolio" data-toggle="tooltip" data-placement="top" title="" >
                                    <img className="img-fluid port-image" src={photoFiller} alt="My day planner app"></img></a> 
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <a href="/portfolio" data-toggle="tooltip" data-placement="top" title="" >
                                    <img className="img-fluid port-image" src={photoFiller} alt="My day planner app"></img></a> 
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}
