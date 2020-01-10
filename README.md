# FriendFinder

![Screenshot](/app/assets/images/screenshot.png)

## About

This project makes use of Node.js and Express.js to create a full stack application. The app includes front-end client side code (html, css, javascript/jquery) and back-end server side code (node.js and express.js npm libraries/packages). The final version of the app is deployed through Heroku. The app is a very simple friend finder website. It contains a survey form with 10 questions the user must complete in order to match with a friend. The user must fill out the entire form before the data is submitted. When submitted, the form data is transfered to the server via http post request as a json object. Server side code takes the data and compares the user's answers with the answers of friends/users already in the database. When the matched friend is found, the name and picture of the friend is returned to the client as a response, triggering a modal that displays it. At any time, the user can click the API Friends List link to view a list of all the friends/users in the database at that time. The data is stored within a javascript variable, which means restarting the server will delete all added users except for the initial friends hard coded into the variable.

## Demo

Demo

Example: [Click Here](https://aqueous-falls-82583.herokuapp.com/) to view the application

Code

![Code](/app/assets/images/code.png)

## Requirements

*[Node](https://nodejs.org/en/)

*[Express](https://expressjs.com/)

## Build Tools

*HTML

*CSS

*Javascript

*Jquery

*Node

*Express

*NPM

*Heroku