import mongoose from "mongoose";
// const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl: String
})

// define Collection in ('') and schema
// collection > [documents] > collection > [documents]

export default mongoose.model('cards', cardSchema)
// module.exports = mongoose.model('cards', cardSchema)