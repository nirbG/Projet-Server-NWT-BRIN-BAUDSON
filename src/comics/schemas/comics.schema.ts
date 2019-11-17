import * as mongoose from "mongoose";
import {HeroSimpleDto} from "../../heros/dto/hero-simple.dto";

export const ComicsSchema = new mongoose.Schema({
    isbn: {
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
        id: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    otherHeros:  [{
        id: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
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
