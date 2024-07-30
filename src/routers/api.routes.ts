import { Router } from 'express';

const router = Router();

router.get('/v1', (_, res) => {
  return res.json({ message: 'hi!' }).end();
});

export const apiRoute = router;
