"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ComicsSchema = new mongoose.Schema({
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
    mainHeros: {
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
    otherHeros: [{
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
});
//# sourceMappingURL=comics.schema.js.map