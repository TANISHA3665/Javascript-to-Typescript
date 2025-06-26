"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_js_1 = require("../controllers/todoController.js");
const authMiddleware_js_1 = require("../middleware/authMiddleware.js");
const router = express_1.default.Router();
router.route("/").post(authMiddleware_js_1.protect, todoController_js_1.createTodo).get(authMiddleware_js_1.protect, todoController_js_1.getTodos);
router.route("/:id").put(authMiddleware_js_1.protect, todoController_js_1.editTodo).delete(authMiddleware_js_1.protect, todoController_js_1.deleteTodo);
exports.default = router;
