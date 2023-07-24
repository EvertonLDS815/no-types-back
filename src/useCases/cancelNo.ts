import { Request, Response } from 'express';

import { No } from '../models/No';

export async function cancelNo(req: Request, res: Response) {
	try {
		const { noId } = req.params;

		await No.findByIdAndDelete(noId);

		res.status(200).json({
			message: 'Nó deletado com sucesso!!!',
		});
	} catch (err) {
		console.log(err);
		res.status(500);
	}
}
