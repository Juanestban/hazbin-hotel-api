import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  return res.json({ message: "hello world, I'm an API!" }).end();
});

router.get('/v1', (_, res) => {
  return res.json({ message: 'v1!' }).end();
});

export const apiRoute = router;
