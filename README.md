
## Technologies
Project is created with:
* React
* React-Router-Dom
* Redux
* Redux-saga
* Node
* Express
* MySQL
* Bookshelf
* Knex
* Socket.io
* Docker
	
## Setup
To run this project
1) Install node dependencies using npm:
```bash
$ cd server/
$ npm install
```
2) Running migrations for the database:
```bash
$ cd database/knex/
$ knex migrate:latest --esm
$ knex seed:run --esm
$ cd ../../
```
3) Start backend-part of the project: 
```bash
$ npm start dev
```
4) Install react dependencies using npm:
```bash
$ cd ../client/
$ npm install
```
5) Start frontend-part of the project: 
```bash
$ npm start
```