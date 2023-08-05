"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const listNos_1 = require("./useCases/listNos");
const createNo_1 = require("./useCases/createNo");
const changeNo_1 = require("./useCases/changeNo");
const cancelNo_1 = require("./useCases/cancelNo");
exports.router = (0, express_1.Router)();
const api_1 = require("./api/api");
// List No
exports.router.get('/', listNos_1.listNos);
// Create No
exports.router.post('/', api_1.upload.single('image'), createNo_1.createNo);
// Update No
exports.router.put('/:noId', api_1.upload.single('image'), changeNo_1.changeNo);
// Delete No
exports.router.delete('/:noId', cancelNo_1.cancelNo);
