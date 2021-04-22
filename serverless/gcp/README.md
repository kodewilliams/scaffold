# Serverless GCP

This repository is set up to support Typescript + Express / Node projects running on GCP Cloud Functions. 

### Architecture 

In here, you will find all of the source code within the `src` folder as outlined:

- client - Multiple wrappers for APIs used such as PubSub and Redis
- global - Common code such as typing and error handlers
- microservices - Raw cloud functions that are invoked via HTTP
- webhooks - Mixture of cloud functions that are invoked via HTTP and PubSub topics
  
In addition, a base microservice is defined with imported and custom middleware and error handling already applied. Feel free to make changes to extend your middleware chain.

The repository is also configured with formatting (Prettier), linting (ESLint) and package management (Yarn). 

### Available Commands

- `yarn build` - Compiles the Typescript into JS
- `yarn fix` - Fixes the codebase using Google TS style
- `yarn lint` - Lints the codebase using Google TS style
- `yarn clean` - Removes the generated build directory
- `yarn format` - Autoformats the codebase and package.json
- `yarn dev --target={name}` - Exposes specified cloud function to local port 8080
- `yarn start --target={name}` - Builds and then exposes specified cloud function to local port 8080

Documentation on the `--target` flag can be found [here](https://github.com/GoogleCloudPlatform/functions-framework#specification-summary).  


#### Footnotes

It is important to note that this layout and code style is highly opinionated and by no means staking any claim as the best architecture. It simply works well for my needs and I thought it would be nice to share with others.
