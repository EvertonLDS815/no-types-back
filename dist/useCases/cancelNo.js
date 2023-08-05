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
exports.cancelNo = void 0;
const No_1 = require("../models/No");
function cancelNo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { noId } = req.params;
            yield No_1.No.findByIdAndDelete(noId);
            res.status(200).json({
                message: 'Nó deletado com sucesso!!!',
            });
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    });
}
exports.cancelNo = cancelNo;
