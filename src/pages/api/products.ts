import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import projects from '@/public/projects.json';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res) => {
  return res.json(projects);
});

export const config = {
  runtime: `edge`,
};

export default router.handler();
