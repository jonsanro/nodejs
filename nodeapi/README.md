# NodeApi

## Install

```shell
npm install
```

.env document is not included on git, so copy the content included on env.example and create a .env document after reviewing the values.

## Run

To start the application in production use:

```shell
npm start
```


## Development

To run the application in development use:
Actually isn´t working properly, so if you want to run it use de npm start method.
```shell
npm run dev
```

##Use

The home is located at localhost:3000 port. 
If you want to filter the products you can add name, sell, price, photo, tag or id filters. 
For example:
*http://localhost:3000/?tag=Mac*

##Create

To create a new product you can make a post with postman.
1. The API is located at: *http://localhost:3000/apiv1/anuncios*
2. Select Body and x-www-form-urlencoded
3. Introduce all the values
4. Make the post

