import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    console.log(port, 'port herer');
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );