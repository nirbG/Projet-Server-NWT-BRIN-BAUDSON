"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.HerosSchema = new mongoose.Schema({
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
    },
    pouvoir: {
        type: String,
    },
    ennemi: [{
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
    allie: [{
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
    isHumain: {
        type: String,
        required: true
    }
}, {
    toJSON: { virtuals: true },
    versionKey: false,
});
//# sourceMappingURL=heros.schema.js.map