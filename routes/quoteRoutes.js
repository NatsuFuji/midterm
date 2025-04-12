import quotesController from '../controller/quoteController.js';
import e from 'express';

export const router = e.Router();

router.post('/create', quotesController.createQuote);
router.get('/get', quotesController.getQuotes);

