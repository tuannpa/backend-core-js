import express, { Application, Request, Response } from "express";

export const register = ( app: Application ) => {
    // define a route handler for the default home page
    app.get( "/", ( req: Request, res: Response ) => {
        res.send("Welcome to my world!!")
    } );
};
