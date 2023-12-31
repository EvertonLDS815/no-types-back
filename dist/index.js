"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.connect(`mongodb+srv://evertonnorope:norope@cluster0.fes6jnl.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3001;
    app.use(cors_1.default);
    app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
    app.use(express_1.default.json());
    app.use(router_1.router);
    app.listen(port, () => {
        console.log(`🚀 http://localhost:${port}`);
    });
})
    .catch((err) => console.log('Erro ao conectar', err));
