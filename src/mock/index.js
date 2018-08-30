
import Mock from 'mockjs';
import loginAPI from './login';

// 登录相关
Mock.mock(/\/api\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/api\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/api\/user\/info/, 'get', loginAPI.getInfo);
//轮播图相关
Mock.mock(/\/api\/user\/getCarouserAll/, 'post', loginAPI.getCarouserAll);

Mock.mock(/\/api\/user\/getCarouser/, 'post', loginAPI.getCarouser);

//首页相关
Mock.mock(/\/api\/user\/getNavigation/, 'post', loginAPI.getNavigation);
export default Mock;
