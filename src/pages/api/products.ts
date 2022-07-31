import nc from 'next-connect';
import projects from '@/public/projects.json';
import { NextApiRequest, NextApiResponse } from 'next';

export default nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  return res.json(projects);
});
