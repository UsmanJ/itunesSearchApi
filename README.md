# itunes-search-api

## Synopsis

The task was to build a simple web application in which the itunes api is implimented. This application allows you to search itunes for any song, artist or album of your choice and add or remove any particular song from your favourites.

## Technologies Used

This application was built using JavaScript and the AngularJS framework.

## Build & development

After cloning the repo, go into the root folder of the project and:

Run `npm install`
Run `grunt`

Run `grunt serve` to view the application

## Testing

Running `grunt test` will run the unit tests with karma.

In order to run the protractor tests do the following:

Run `grunt serve`
Run `webdriver-manager start` in a new tab
Go to `http://127.0.0.1:4444/wd/hub` to create a session in either chrome or firefox
Run `protractor test/e2e/conf.js` in another new tab and this will run the protractor tests
