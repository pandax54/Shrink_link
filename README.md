# Shrink_link

## :computer: Project
A URL Shortener With Node.js, Express, and Postgres and React
</br>

</br>

## :rocket: Technologies

#### :us: This project was developed with the following technologies:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- Postgres

## : Application Structure
- The frontend must be developed using the React framework.
- The backend must be developed using the Node.js framework.
</br>


## Steps


### install - Back-End (Servidor/API)

First clone the repository.
```
$ yarn 
```

Then run the migrations to create the table in the database:

```
$ yarn typeorm migration:run
```

In the root you must configure the ```ormconfig.json```with your informations:

```
{
  "type": "postgres",
  "host": "localhost",
  "port": "5432", 
  "username": "fernandapenna",  --> change here
  "password": "",
  "database": "interlink", --> create this database 
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

To start the server:
```
$ yarn dev:server 
```



### install - Front-End (React)

```
$ yarn
$ yarn start
```


