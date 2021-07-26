import translator from "../../images/TranslationApp.png";
import weather from "../../images/WeatherApp.png";
import hgs from "../../images/historic-grafton-school.png";
import chickentinder from "../../images/chickentinder.png";

// setting picLink to false prevents the image from having a link and workingLink is not needed

const portfolioItems = [
    {
        image: weather,
        name: 'Weather Dashboard',
        discription: 'This app uses HTML5, JavaScript, Bootstrap, Local Storage, Openweather API, and Axios to make API calls. It gets the weather by city. It displays the current weather, 5 day forcast, and UV index.',
        additional: "I added a dropdown with all 50 states and hardcoded USA as the country. This eliminated a number of errors. For example searching 'Canton' no longer brings up weather in Canton, China.",
        githubText: "The image has an imbedded link to the app. The code is available on",
        github: 'https://github.com/Misterjosh/weather-dashboard-redone',
        objectId: 0,
        picLink: true,
        workingLink: "https://misterjosh.github.io/Homework-06-WeatherApp/index.html"
    }, 
    {
        image: translator,
        name: 'What did you say?',
        discription: 'This app uses HTML5, CSS3, JavaScript, Bootstrap, a MySQL Database, the Handlebars templating engine, OMDb API, and Axios to handle API calls. The server is a Node server, controlled by Express and controls the database with Sequelize.',
        additional: "This app translates from English to 93 other languages. If it doesn't, the monthly API call limit has been reached.",
        githubText: "This was my first group project. In order to make it my own, started over and wrote all the code. Heavy refactoring on the Java Script. My code is available on",
        github: 'https://github.com/Misterjosh/translation-app-upgrade',
        objectId: 1,
        picLink: true,
        workingLink: "https://misterjosh.github.io/Project-1%20-translation-app/index.html"
    }, 
    {
        image: hgs,
        name: 'Historic Grafton School',
        discription: 'This is a website I was hired to build, using Squarespace, for a non profit orginization.',
        additional: "I meet with the client weekly and address changes, upgrades, or concerns about the site. Feel free to click on the image and check out my work.",
        objectId: 2,
        picLink: true,
        workingLink: "http://www.historicgraftonschool.org"
    }, 
    {
        image: chickentinder,
        name: 'Chicken Tinder',
        discription: 'This app uses JSX, CSS3, JavaScript, Bootstrap, Reactstrap, React, a MongoDB database, OpenTable API, and Axios to handle API calls. The server is a Node server, controlled by Express and controls the database with Mongoose.',
        additional: "We wanted to make an app that allows people that can't decide on where to eat, pick a group of 5 places they like. Then compares the results and shows results if they have a match.",
        githubText: "It isn't hosted(not my repo). If you want, I can demo it locally. Also, the code is available on",
        github: 'https://github.com/BethanyWebb/Final',
        objectId: 3,
        picLink: false
    }
]

export default portfolioItems;