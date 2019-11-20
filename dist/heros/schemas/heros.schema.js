"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.HerosSchema = new mongoose.Schema({
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
            },
            photo: {
                type: String,
            },
            name: {
                type: String,
            }
        }],
    allie: [{
            _id: {
                type: String,
            },
            photo: {
                type: String,
            },
            name: {
                type: String,
            }
        }],
    isHumain: {
        type: Boolean,
        required: true
    }
}, {
    toJSON: { virtuals: true },
    versionKey: false,
});
//# sourceMappingURL=heros.schema.js.map