"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.No = void 0;
const mongoose_1 = require("mongoose");
exports.No = (0, mongoose_1.model)('No', new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    nivel: {
        type: String,
        enum: ['Básico', 'Intermediário', 'Avançado'],
        default: 'Básico'
    },
    type: {
        type: String,
    },
    linkImage: {
        type: String,
        require: true
    },
    linkVideo: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
}));
