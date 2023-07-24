import { Router } from 'express';
import { listNos } from './useCases/listNos';
import { createNo } from './useCases/createNo';
import { changeNo } from './useCases/changeNo';
import { cancelNo } from './useCases/cancelNo';

export const router = Router();

import { upload } from './api/api';

// List No
router.get('/', listNos);
// Create No
router.post('/', upload.single('image'), createNo);
// Update No
router.put('/:noId', upload.single('image'), changeNo);
// Delete No
router.delete('/:noId', cancelNo);
