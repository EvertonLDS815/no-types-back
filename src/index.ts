import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import cors from 'cors';

mongoose.connect(`mongodb+srv://evertonnorope:norope@cluster0.fes6jnl.mongodb.net/?retryWrites=true&w=majority`)
	.then(() => {
		const app = express();
		const port = process.env.PORT || 3001;

		app.use(cors);
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);

		app.listen(port, () => {
			console.log(`🚀 http://localhost:${port}`);
		});
  	})
  .catch((err) => console.log('Erro ao conectar', err));
