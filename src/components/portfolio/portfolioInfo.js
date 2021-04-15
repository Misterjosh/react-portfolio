import translator from "../../images/TranslationApp.png";
import weather from "../../images/WeatherApp.png";
import timecapsule from "../../images/timecapsule1.png";
import chickentinder from "../../images/chickentinder.png";

const portfolioItems = [
    {
        image: weather,
        name: 'Weather Dashboard',
        discription: 'This app uses HTML5, JavaScript, Bootstrap, Local Storage, Openweather API, and Axios to make API calls. It gets the weather by city. It displays the current weather, 5 day forcast, and UV index.',
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
        image: timecapsule,
        name: 'Time Capsule',
        discription: 'This app uses HTML5, JavaScript, Bootstrap, Local Storage, Openweather API, and Axios to make API calls. It gets the weather by city. It displays the current weather, 5 day forcast, and UV index.',
        additional: "We wanted to make a digital time capsule. You could put images, messages, and videos in. You would choose who to send it to, pick a date to have it delivered, seal it, and it would be stored until delivery date.",
        githubText: "We didn't get it completed or hosted. It wasn't my repo and will most likely never be functional. My code is available on",
        github: 'https://github.com/JamesWalterHudeck/Project2-timeCapsule',
        objectId: 2,
        picLink: false
    }, 
    {
        image: chickentinder,
        name: 'Chicken Tinder',
        discription: 'This app uses JSX, CSS3, JavaScript, Bootstrap, Reactstrap, React, a MongoDB database, OpenTable API, and Axios to handle API calls. The server is a Node server, controlled by Express and controls the database with Mongoose.',
        additional: "We wanted to make an app that allows people that can't decide on where to eat, pick a group of 5 places they like. Then compares the results and shows results if they have a match.",
        githubText: "It isn't hosted(not my repo again). If you want, I can demo it locally. Also, the code is available on",
        github: 'https://github.com/BethanyWebb/Final',
        objectId: 3,
        picLink: false
    }
]

export default portfolioItems;