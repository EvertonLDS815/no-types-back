import { Request, Response } from 'express';

import { No } from '../models/No';

export async function changeNo(req: Request, res: Response) {
	try {
		const { noId } = req.params;
		const linkImage = req.file?.filename;
		const { name, nivel, type, linkVideo, description } = req.body;

		await No.findByIdAndUpdate(noId, {
			name,
			nivel,
			type,
			linkImage: linkImage?.replace(
				linkImage,
				`http://localhost:3001/uploads/${linkImage}`,
			),
			linkVideo,
			description,
		});

		res.sendStatus(204);
	} catch (err) {
		console.log(err);
		res.status(500);
	}
}
