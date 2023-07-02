import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listNos } from './useCases/listNos';
import { createNo } from './useCases/createNo';
import { changeNo } from './useCases/changeNo';
import { cancelNo } from './useCases/cancelNo';

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
			destination(req, file, callback) {
				callback(null, path.resolve(__dirname, '..', 'uploads'));
			},
			filename(req, file, callback) {
				callback(null, `${Date.now()}-${file.originalname}`)
			}
		})
	});
// List No
router.get('/', listNos)
// Create No
router.post('/', upload.single('image'), createNo)
// Update No
router.put('/:noId', upload.single('image'), changeNo);
// Delete No
router.delete('/:noId', cancelNo)
