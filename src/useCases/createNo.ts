import { Request, Response} from 'express';

import { No } from '../models/No';

export async function createNo(req: Request, res: Response) {
	try {

		const {
			name,
			nivel,
			type,
			linkVideo,
			description
		} = req.body;

		if (!['Básico', 'Intermediário', 'Avançado'].includes(nivel)) {
			return res.status(404).json({
				error: 'nivel should be one of these: Básico, Intermediário e Avançado.'
			});
		}
		const linkImage = req.file?.filename;
		const no = await No.create({
			name,
			nivel,
			type,
			linkImage: linkImage?.replace(linkImage, `http://localhost:3001/uploads/${linkImage}`),
			linkVideo,
			description
		});
		res.status(201).json(no);
	} catch (err) {
		res.sendStatus(500);
		console.log(err);
	}
}
