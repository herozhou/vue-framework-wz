/*
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
      switch: '0',
      name: '轮播图1',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: '1',
      name: '轮播图2',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '轮播图3',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '轮播图4',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ],
  dataNavigation: [
    {
      id: 1,
      switch: 0,
      name: '首页1位置',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: 1,
      name: '首页2位置',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '首页3位置',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '首页4位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 5,
      switch: '0',
      name: '首页5位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 5
    },
    {
      id: 6,
      switch: '1',
      name: '首页6位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 6
    },
    {
      id: 7,
      switch: 1,
      name: '首页7位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 7
    },
    {
      id: 8,
      switch: 1,
      name: '首页8位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 8
    },
    {
      id: 9,
      switch: 1,
      name: '启动页图片',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 9
    }
  ],
  categoryList: [
    {
      id: 1,
      name: '冰箱',
      level: 0,
      weights: 1,
        parent_id:''
    },
    {
      id: 2,
      level: 0,
      name: '洗衣机',
      weights: 2,
        parent_id:''

    },
    {
      id: 3,
      name: '空调',
      level: 0,
      weights: 3,
        parent_id:''
    },
    {
      id: 4,
      level: 0,
      name: '电视',
      weights: 4,
        parent_id:''
    },
    {
      id: 5,
      level: 0,
      name: '冷柜',
      weights: 5,
        parent_id:''
    },
    {
      id: 6,
      level: 0,
      name: '中央空调',
      weights: 6,
        parent_id:''
    },
    {
      id: 7,
      level: 0,
      name: '小家电',
      weights: 7,
        parent_id:''
    },
    {
      id: 8,
      level: 0,
      name: '油烟机',
      weights: 8,
        parent_id:''
    },
      {
          id: 9,
          level: 1,
          name: '双开门',
          weights: 8,
          parent_id:'1'
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
    console.group('返回了' + 'getCarouser');
    return userMap.dataCarouser[0];
  },
  getCarouserAll: config => {
    console.group('返回了' + 'getCarouserAll');
    return userMap.dataCarouser;
  },
  getCategoryAll: config => {
    console.group('返回了' + 'getCategoryAll');
    return userMap.categoryList;
  },
  getNavigation: config => {
    return userMap.dataNavigation;
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
*/
