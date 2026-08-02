import express, { Request, Response } from 'express';
import { spaces } from './data/spaces';

const app = express();

app.use(express.json());

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// GET /api/spaces - Returns all spaces
app.get('/api/spaces', (_req: Request, res: Response) => {
  res.json({
    status: {
      code: 200,
      message: 'success'
    },
    data: spaces
  });
});

export default app;
