# portfolio-cypress-the-internet

## Node

I recommend using node version manager to manage node versions. Run `nvm use` to active the version of node defined in .npmrc

## Docker Compose

Ensure Docker is installed and running locally.

Run `docker compose up` to start The Internet and run Cypress tests.
Note: Currently the app won't automatically stop when the tests are finished running.
You can run `docker compose down` to clean up the environment.

Run `docker compose up the-internet` to run only The Internet app via Docker, this will allow you to to develop tests using a locally installed Cypress.

## Cypress

Cypress is installed as a node dev module, to assist development including allowing type references. If you're only running via Docker, you need not install Cypress or have node running locally if you don't want.

Install Cypress and any other node dependencies using `npm install`, or `npm ci` to use the versions specified in the package lock explicitly.

// TODO(soon) Add better descriptive text to readme to explain relevance of me building tests for an Automation Portfolio.

// TODO(soon) Improve the abtest to test something meaningful, at the moment it really only needs the page to load.

// TODO(soon) Start creating page object models.

// TODO(over time) Add more tests.

// TODO(later) Introduce running of test in a pipeline, probably GitHub actions
