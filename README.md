## Installation

```bash
$ git clone https://github.com/nirbG/Projet-Server-NWT-BRIN-BAUDSON

$ cd Projet-Server-NWT-BRIN-BAUDSON

$ npm install

$ yarn install
```

## Database

Start MongoDB

In Robo 3T create (or connect to) a server connected to localhost:27017   
Then in this server create a collection named "comics" and another one named "heros"  

Initalize the comics collection by running the script contained in scripts/initComics.mongo.js  
Initalize the heros collection by running the script contained in scripts/initHeros.mongo.js  
Then create the heros index by running the script contained in scripts/indexHeros.mongo.js  

## Running the app

$ nest start

## Documentation 

while the app is running, documentation about it's features can be found at the url:

```bash
http://127.0.0.1:3000/documentation/
```
