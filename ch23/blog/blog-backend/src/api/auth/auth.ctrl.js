import Joi from 'joi';
import User from '../../models/user';

/*
  POST /api/auth/login
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const login = async ctx => {
    const { username, password } = ctx.request.body;
  
    // username, password가 없으면 에러 처리
    if (!username || !password) {
      ctx.status = 401; // Unauthorized
      return;
    }
  
    try {
      const user = await User.findByUsername(username);
      // 계정이 존재하지 않으면 에러 처리
      if (!user) {
        ctx.status = 401;
        return;
      }
      const valid = await user.checkPassword(password);
      // 잘못된 비밀번호
      if (!valid) {
        ctx.status = 401;
        return;
      }
      ctx.body = user.serialize();
    } catch (e) {
      ctx.throw(500, e);
    }
  };