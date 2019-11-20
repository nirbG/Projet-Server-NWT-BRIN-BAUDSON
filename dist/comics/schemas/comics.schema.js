"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ComicsSchema = new mongoose.Schema({
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
    mainHeros: {
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
    otherHeros: [{
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
});
//# sourceMappingURL=comics.schema.js.map