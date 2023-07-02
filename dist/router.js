"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const listNos_1 = require("./useCases/listNos");
const createNo_1 = require("./useCases/createNo");
const changeNo_1 = require("./useCases/changeNo");
const cancelNo_1 = require("./useCases/cancelNo");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});
// List No
exports.router.get('/', listNos_1.listNos);
// Create No
exports.router.post('/', upload.single('image'), createNo_1.createNo);
// Update No
exports.router.put('/:noId', upload.single('image'), changeNo_1.changeNo);
// Delete No
exports.router.delete('/:noId', cancelNo_1.cancelNo);
