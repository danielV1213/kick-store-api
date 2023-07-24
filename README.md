# API for KickStore, the most reliable online sneakers store in LATAM.

## General content

What will you find in this repository?

- Service for obtaining sneakers that are currently in stock.
- Service for obtaining special prices.
- MongoDb database configuration.

The structure of the project was made based on **MVC** architecture; where the **Model** is represented by the Product, the **View** by the routes that bring the information with the help of the services, and the **Controller** by the controllers that return a response based on the information given to the endpoint.

## How to use

### Install all requirements

To clone and run this project, you will need to install:

- [Git](https://git-scm.com/) (comes with [npm](https://www.npmjs.com/))
- [Node.js](https://nodejs.org/en/download/) (comes with [npm](https://www.npmjs.com/))

When you complete all the installations, you can clone the repository and install the dependencies:

```bash
# Clone this repository
$ git clone https://github.com/danielV1213/kick-store-api

# Go into the repository
$ cd kick-store-api

# Install dependencies
$ npm install
```

## Configure environment variables

Disclaimer: due to the use of the hosting service [Render](https://render.com/) in this API, the MongoDB URL had to be uncovered. But the proper and secure process involves creating a .env file for storing this kind of information.

Create an environment file called **.env** in the root of the project and create and assign the following env variables:

```javascript
PORT= //Port in which you will run the project
MONGO_URL= //Url used to connect to the MongoDB database. Don't forget to add the user and password to access to the database.
```

### Run the projects

Once you've completed all the configurations, you can run the project:

```bash
# Run the app
$ npm run start
```

### Test endpoints manually

Feel free to test the endpoints present in the API, using a tool like [Postman](https://www.postman.com/downloads/).

### Test the API

As mentioned before, the API was deployed using the hosting service [Render](https://render.com/). The endpoints can be tested online here:

- [Products](https://kick-store-api-danielv1213.onrender.com/products-request/products)
- [Special prices](https://kick-store-api-danielv1213.onrender.com/products-request/price/1001/Nike/SuperJordan)

## Thats all!

Now you can enjoy the best kicks API in LATAM.
