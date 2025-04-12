import express from 'express';
import { getTodos, createTodo, deleteTodo } from './todoController.js';

const router = express.Router();

router.get('/todos', getTodos);         // GET all todos
router.post('/todos', createTodo);      // POST a new todo
router.delete('/todos/:id', deleteTodo); // DELETE a todo by id

export default router;
