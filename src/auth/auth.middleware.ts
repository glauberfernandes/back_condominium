import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    console.log(authorizationHeader);

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer')) {
      return res.status(401).json({ message: 'Formato inválido do token' });
    }

    const token = authorizationHeader.substring(7); // Remove o prefixo 'Bearer ' para obter apenas o token

    console.log(token);

    try {
      const decoded = jwt.verify(token, 'senha123');
      req.user = decoded;
      req.headers.authorization = `Bearer ${token}`;

      next();
    } catch (error) {
      return res.redirect('/login');
    }
  }
}
