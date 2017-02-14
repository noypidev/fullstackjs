import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: [ Math.random() ]});
});

export default router;
