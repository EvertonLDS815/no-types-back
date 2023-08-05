"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientURL = exports.port = void 0;
exports.port = process.env.PORT || 3001;
exports.clientURL = process.env.CLIENT_URL || `http://localhost:${exports.port}`;
