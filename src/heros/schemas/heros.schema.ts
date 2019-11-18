import * as mongoose from "mongoose";

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
