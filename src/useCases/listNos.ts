import { Request, Response} from 'express';

import { No } from '../models/No'

export async function listNos(req: Request, res: Response) {
	try {
		const no = await No.find();

		res.json(no);
	} catch (err) {
		console.log(err);
		res.status(500);
	}
}
