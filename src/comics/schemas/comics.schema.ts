import * as mongoose from "mongoose";

export const ComicsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    mainHeros:{
        _id: {
            type: String,
        },
        photo: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    otherHeros:  [{
        _id: {
            type: String,
        },
        photo: {
            type: String,
        },
        name: {
            type: String,
        },
    }],
    price: {
        type: Number,
        required: true
    },
    wish: {
        type: Boolean,
    },
    inBD: {
        type: Boolean,
    }
}, {
    toJSON: { virtuals: true },
    versionKey: false,
})
