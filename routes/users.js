import express from 'express';

import { mostraOsCria,criaOsCria, mostraUmCria, deletaOcria, atualizaOcria } from '../controllers/users.js';


const router = express.Router();


router.get('/', mostraOsCria);

router.post('/', criaOsCria );

router.get('/:id',mostraUmCria);

router.delete('/:id',deletaOcria);

router.patch('/:id',atualizaOcria);

export default router;
