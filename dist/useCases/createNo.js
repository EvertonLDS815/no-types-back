"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNo = void 0;
const No_1 = require("../models/No");
function createNo(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nivel, type, linkVideo, description } = req.body;
            if (!['Básico', 'Intermediário', 'Avançado'].includes(nivel)) {
                return res.status(404).json({
                    error: 'nivel should be one of these: Básico, Intermediário e Avançado.',
                });
            }
            const linkImage = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const no = yield No_1.No.create({
                name,
                nivel,
                type,
                linkImage: linkImage === null || linkImage === void 0 ? void 0 : linkImage.replace(linkImage, `http://localhost:3001/uploads/${linkImage}`),
                linkVideo,
                description,
            });
            res.status(201).json(no);
        }
        catch (err) {
            res.sendStatus(500);
            console.log(err);
        }
    });
}
exports.createNo = createNo;
