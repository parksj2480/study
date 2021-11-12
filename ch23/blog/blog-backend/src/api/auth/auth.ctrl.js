import Joi from 'joi';
import User from '../../models/user';

/*
  POST /api/auth/login
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
/*
  GET /api/auth/check
*/
/*
  POST /api/auth/logout
*/
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204; // No Content
  };
  
export const check = async ctx => {
    const { user } = ctx.state;
    if (!user) {
      // 로그인 중 아님
      ctx.status = 401; // Unauthorized
      return;
    }
    ctx.body = user;
  };

