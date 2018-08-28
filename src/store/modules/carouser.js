import {getCarouser, getUser} from 'api/carouser';
import Cookies from 'js-cookie';

const carouser = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: undefined,
    auth_type: '',
    token: Cookies.get('Admin-Token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },

  actions: {
    //Action 中的回调函数会接收一个上下文 context 对象，它包含了当前 store 中所有属性和方法，但其不是 store 本身。你可以通过 context.commit 来提交 mutation，也可以通过 context.state 与 context.getters 来获取 state 和 getters。
    // 邮箱登录
    GetCarouser({ commit }) {
      return new Promise((resolve, reject) => {
        getCarouser().then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    },
    GetUser({ commit }) {
      return new Promise((resolve, reject) => {
        getUser().then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    }
  }
};

export default carouser;
