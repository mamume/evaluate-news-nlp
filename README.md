# Evaluate a News Article with Natural Language Processing

## Overview

 A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 
 NLP is the ability of an application to understand the human language, written or oral using [Sentiment Analysis API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis) from [MeaningCloud](https://www.meaningcloud.com/).
 
 ### Installation

    * install all project dependencies with `npm install`
    * change .env file with your API key.
    
 ### Launch

    * Start project server with `npm run start`
    * Build project in development mode with `npm run build-dev`
    * Build project in production mode with `npm run build-prod`
  
  ### Testing
    * Test project with `npm run test`
    
    
## Project Structure

```bash
├── package-lock.json
├── package.json
├── src
│   ├── __test__
│   │   ├── handleSubmit.test.js
│   │   ├── showResult.test.js
│   │   └── urlChecker.test.js
│   ├── client
│   │   ├── index.js
│   │   ├── js
│   │   │   ├── handleSubmit.js
│   │   │   ├── showResult.js
│   │   │   └── urlChecker.js
│   │   ├── styles
│   │   │   ├── base.scss
│   │   │   ├── footer.scss
│   │   │   ├── form.scss
│   │   │   ├── header.scss
│   │   │   └── resets.scss
│   │   └── views
│   │       └── index.html
│   └── server
│       ├── index.js
│       └── mockAPI.js
├── webpack.dev.js
└── webpack.prod.js
```

## Dependencies

This project was built using these packages.

  - "axios": "^0.22.0",
  - "cors": "^2.8.5",
  - "dotenv": "^10.0.0",
  - "express": "^4.17.1",
  - "valid-url": "^1.0.9",
  - "webpack": "^5.56.0",
  - "webpack-cli": "^4.8.0"
  - "@babel/core": "^7.15.5",
  - "@babel/preset-env": "^7.15.6",
  - "babel-loader": "^8.2.2",
  - "clean-webpack-plugin": "^4.0.0",
  - "css-loader": "^6.3.0",
  - "css-minimizer-webpack-plugin": "^3.0.2",
  - "html-webpack-plugin": "^5.3.2",
  - "jest": "^27.2.4",
  - "mini-css-extract-plugin": "^2.3.0",
  - "node-sass": "^6.0.1",
  - "sass-loader": "^12.1.0",
  - "style-loader": "^3.3.0",
  - "terser-webpack-plugin": "^5.2.4",
  - "webpack-dev-server": "^4.3.0",
  - "workbox-webpack-plugin": "^6.3.0"
