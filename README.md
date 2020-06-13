<h1 align="center" >TUSC</h1>
<h3 align="center"> The official site for TUSC</h3>

## Technologies used
* FrontEnd - ReactJS with Redux
* Backend - NodeJS
* Database - MongoDB


## Steps to run the application
### For Linux
* Download mongodb and create a folder to store the databases eg: 'mongo-data'
* start the mongod by `mongod --dbpath './mongo-data'`
* If you get a socket error run `sudo killall -15 mongod`
### For Windows
* Set up your MongoDB Database as in the tutorial: [MongoDb Tutorial (click here)](https://www.youtube.com/watch?v=FwMwO8pXfq0&t=27s)
* Start the mongod by `net start MongoDB`

### Installing depencencies and running the app
* Fork the repository
* Clone the repository
* Install create-react-app `npm install -g create-react-app`
* Install the dependencies by `npm install` for server and `npm install client` for client.
* Run in development mode by `npm run dev`


## Structure of the project 
* Client folder contains the Frontend part which is the ReactJS application
* routes and models folder are for backend.


<br>

### Author

#### [Adittya Dey](https://github.com/adiXcodr) ❤

[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://www.linkedin.com/in/adittya-dey-3966b916b)
[<img src="https://image.flaticon.com/icons/svg/185/185981.svg" width="35" padding="10">](https://www.facebook.com/adittya.dey.3)
[<img src="https://image.flaticon.com/icons/svg/185/185985.svg" width="35" padding="10">](https://www.instagram.com/adixdey/)


<!-- "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client" -->