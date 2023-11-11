# prn-automation-test-suite
# Introduction:
The objective of this PRN (Packaging Waste Recovery Notes) project is a funding mechanism supporting the UK’s waste and recycling infrastructure. They were introduced in 1997 by the Producer Responsibility Obligations (Packaging Waste) Regulations. This legislation places a PRN purchasing obligation on companies handling over 50 tonnes of packaging with turnovers over £2m. Such companies are referred to as “Producers”. Because the material these Producers are responsible for ultimately ends up in the UK’s waste stream, they must buy sufficient PRNs in order to offset this obligation using a “producer pays” principle. In simple terms, the more packaging they handle the more PRNs they must buy against set percentage targets.
PRNs are important as the funding received from their sale by Accredited Reprocessors and Exporters can only be used in ways that beneﬁt resource collection and recycling. This could include buying new recycling equipment or help ﬁnancing recycling waste collections.
# Getting Started: 
The users can get the latest code up and running on their own system by cloning this project. 
   Install Node JS and Playwright and accept the default using the following commands:
     npm install -g npm@latest
     npm init playwright@latest
   dotenv loads the environment variables from a .env file into process.env
     npm install --save dotenv
  In the .env file maintain all the base URLs for the UI and the API services.
# Build and Test:
Run the tests using the following command:
  npx playwright test
In the package.config file you can define the tests directory as ./tests and this will run all the tests present in that folder.
