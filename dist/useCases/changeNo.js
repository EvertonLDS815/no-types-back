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
exports.changeNo = void 0;
const No_1 = require("../models/No");
function changeNo(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { noId } = req.params;
            const linkImage = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const { name, nivel, type, linkVideo, description } = req.body;
            yield No_1.No.findByIdAndUpdate(noId, {
                name,
                nivel,
                type,
                linkImage: linkImage === null || linkImage === void 0 ? void 0 : linkImage.replace(linkImage, `http://localhost:3001/uploads/${linkImage}`),
                linkVideo,
                description
            });
            res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    });
}
exports.changeNo = changeNo;
