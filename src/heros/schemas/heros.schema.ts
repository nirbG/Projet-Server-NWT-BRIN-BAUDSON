import * as mongoose from "mongoose";
import {HeroSimple} from "../interfaces/heroSimple.interfaces";
import {HeroSimpleDto} from "../dto/hero-simple.dto";

export const HerosSchema = new mongoose.Schema({
    _id: {
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
    },
    pouvoir: {
        type: String,
    },
    ennemi: [{
        _id: {
            type: String,
            //required: true
        },
        photo: {
            type: String,
            //required: true
        },
        name: {
            type: String,
            //required: true
        }
    }],
    allie: [{
        _id: {
            type: String,
            //required: true
        },
        photo: {
            type: String,
            //required: true
        },
        name: {
            type: String,
            //required: true
        }
    }],
    isHumain: {
        type: String,
        required: true
    }
}, {
    toJSON: { virtuals: true },
    versionKey: false,
})
