# API_English_School_ORM

This project was developed on the course "ORM com NodeJS: API com Sequelize e MySQL" from Alura.
The objective was create an API to control an english school, managing the classes and people. 
The database was created on MySQL with ORM Sequelize.

- Object-Relational Mapping - ORM

ORMs isolate data relational layer from the rest of application, offering a unique interface. 
ORMs can translate a programming language to SQL language, making easier to manipulate databases, independently of which 
database is being used. It is even possible to change the database without changing the code itself. So it's easier to 
mantain. 
Another important aspect of ORMs is the possibility to control changes on database through migrations. Every change is passed to database by migrations that are indexed. So you can undo some change using the log registered on a specific table (SequelizeMeta, in this case).

 - Project characteristics

Enviroment: NodeJS<br>
Package manager: NPM<br>
Libraries: ExpressJS, Body-Parser, Nodemon<br>
ORM: Sequelize<br>
Database: MySQL<br>
API testing: Postman<br>
Architectural pattern: MVC<br>


- Sequelize

Some commands you can use with Sequelize:

Create an empty project:
```
`npx sequelize-cli init
```
Create models that are the tables with their attributes and type of each:
```
`npx sequelize-cli model:create --name <name_of_table> --attributes <key:type,key:type>
```
Send data to database:
```
npx sequelize-cli db:migrate
```
Generate example and test data:
```
npx sequelize-cli seed:generate --name demo-<name>
```
Populate the tables:
```
npx sequelize-cli db:seed:all
```
