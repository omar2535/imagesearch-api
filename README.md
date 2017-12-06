# ImageSearch API

This is a image search api based on freecodecamp ImageSearch


To run this, first make sure to have the following dependencies:
```
npm install express.js --save
npm install body-parser.js --save
npm install mongodb --save
npm install request --save
npm install dotenv --save
npm install node-google-image-search --save
npm install path --save
```

Then in console, run: 

```
node server.js
```
Example of requests include are: 

```
http://localhost:3000/api/YourImageSearchHere
http://localhost:3000/latest
http://localhost:3000/YourImageSearchHere?offset=NumberOfJsonObjectsReturned
```


This works but is not running on any servers as I have exceeded the maximum limit of free unverified apps on heroku. 

This uses mLab for the mongodb database. Make a new config folder and add your own db.js file with the following code

``` javascript

module.exports = {
  url = "mongodb://<dbuser>:<dbpassword>@ds123722.mlab.com:23722/YourDatabaseName"
};
```

A .env file will also be needed in the root of your directory. A custom search engine must be made and a google API key must be retrieved. One can be found here: https://developers.google.com/custom-search/docs/tutorial/creatingcse

In your .env file, place the following 
```Javascript
CSE_ID=YourSearchEngineID
CSE_API_KEY=AnyAPPApiKEY
```

