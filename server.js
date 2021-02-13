// -> ES6 import -> SyntaxError: Unexpected identifier - из-за старой версии node.
import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

// -> node.js require
// const express = require('express');
// const mongoose = require('mongoose');
// const Cards = require('./dbCards.js');
// const Cors = require('cors');

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:drip3kect_noss1FROS@cluster0.lc0h2.mongodb.net/tinderdb?retryWrites=true&w=majority"

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
// connection_url, and then parameters in {}
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO OKSANA'));
app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;
    // fn that create a new Document
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
// another endpoint that download/retrieve data from db
app.get('/tinder/cards', (req,res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
// Listener
app.listen(port, ()=> console.log(`listening on localhost ${port}`));