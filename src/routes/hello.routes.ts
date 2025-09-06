import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Endpoint de saludo
 *     description: Retorna un mensaje de saludo del microservicio
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Mensaje de saludo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from project-task
 */
router.get('/hello', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from project-task'
  });
});

export default router;
