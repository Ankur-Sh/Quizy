## Instructions:

-   To run the backend server, follow the steps below:

    -   clone this repository and install node/npm, in your system.
    -   Create .env file in the root directory,
    -   Install dependencies using command `npm install`
    -   In order to run server, type command `npm start` in project directory terminal.
    -   Install additional dependencies using npm install cors express mongoose morgan nodemon

-   To run the Frontend server, follow the steps below:
    -   clone this repository in your system.
    -   Create .env file in the root directory,
    -   Install dependencies using command `npm install`
    -   In order to run server, type command `npm start` in project directory terminal.
    -   Install additional dependencies using npm install @react-oauth/google @reduxjs/toolkit axios react-dom react-redux react-router-dom

## Additional Information:

-   To get Questions at first you have to post the questions in your mongodb database once using Thunder Client or something else.
-   POST: http://localhost:5000/api/questions on this url
-   Also to start GoogleOauth you have to set us credentials of port from https://console.cloud.google.com/
-   Or if you can't then simply go to localhost:{Port}/main
-   Give Some username else you can't continue to the quiz.
-   After Quiz the result is stored in mongodb database and is displayed in result section.
