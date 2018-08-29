import { param2Obj } from 'utils';

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: 'Normal Editor',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    name: '工程师小王',
    uid: '003'
  },
  dataCarouser: [
    {
      id: 1,
      switch: 0,
      name: '轮播图1',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: 1,
      name: '轮播图2',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: 0,
      name: '轮播图3',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: 1,
      name: '轮播图4',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ]
}

export default {
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    // console.info(userMap[email.split('@')[0]]);
    // alert("11");
    return userMap[email.split('@')[0]];
  },

  getCarouser: config => {
    return userMap.dataCarouser;
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      //return Promise.reject('a');
      return Promise.reject(new Error('a'));
    }
  },
  logout: () => 'success'
};
