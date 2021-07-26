import React from 'react';
import "./portfolio.css";
import portfolioItems from "./portfolioInfo";
// if needed const photoFiller = "https://via.placeholder.com/350x350";

export default function Portfolio() {
    return (
        <div className="container">
            <main className="row pos">
                <div className="col-md-12">
                    <article className="block">
                        <h1 className="block-header">My Portfolio</h1>
                        <hr />
                        <div>
                            {portfolioItems.map(function(item) {
                                if (item.picLink && item.githubText) {
                                    return (
                                        <div className="row" key={item.objectId}>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <a href={item.workingLink} 
                                                    data-toggle="tooltip" 
                                                    data-placement="top" 
                                                    title="" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer">                               
                                                    <img 
                                                        loading="lazy" 
                                                        className="shadow" 
                                                        target="_blank" 
                                                        src={item.image} 
                                                        alt={item.name}>
                                                    </img>
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <h5>{item.name}</h5>
                                                <p>{item.discription}</p>
                                                <p>{item.additional}</p>
                                                <p>{item.githubText} <a href={item.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>.</p>
                                            </div>
                                        </div>
                                        );
                                } else if (item.picLink && !item.githubText) {
                                    return (
                                        <div className="row" key={item.objectId}>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <a href={item.workingLink} 
                                                    data-toggle="tooltip" 
                                                    data-placement="top" 
                                                    title="" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer">                               
                                                    <img 
                                                        loading="lazy" 
                                                        className="shadow" 
                                                        target="_blank" 
                                                        src={item.image} 
                                                        alt={item.name}>
                                                    </img>
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <h5>{item.name}</h5>
                                                <p>{item.discription}</p>
                                                <p>{item.additional}</p>
                                            </div>
                                        </div>
                                        );
                                } else {
                                    return (
                                        <div className="row" key={item.objectId}>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <img loading="lazy" 
                                                    className="shadow img-fluid port-image" 
                                                    target="_blank" 
                                                    src={item.image} 
                                                    alt={item.name}>
                                                </img>
                                            </div>
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <h5>{item.name}</h5>
                                                <p>{item.discription}</p>
                                                <p>{item.additional}</p>
                                                <p>{item.githubText} <a href={item.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>.</p>
                                            </div>
                                        </div>
                                        );
                                 }
                            })}
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}