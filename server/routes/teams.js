import express from 'express';

import { getTeams, createTeam } from '../controllers/teams.js';

const router = express.Router();

router.get('/', getTeams);
router.post('/', createTeam);

export default router;