import {addCarousel, getCarouser, getUser, getNavigation, getCarouserAll, getCategoryAll} from 'api/carouser';
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

  actions: {
    //Action 中的回调函数会接收一个上下文 context 对象，它包含了当前 store 中所有属性和方法，但其不是 store 本身。你可以通过 context.commit 来提交 mutation，也可以通过 context.state 与 context.getters 来获取 state 和 getters。
    //商品分类列表
    GetCategoryAll({ commit }) {
      return new Promise((resolve, reject) => {
        getCategoryAll().then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    },
    // 邮箱登录
    GetNavigation({ commit }) {
      return new Promise((resolve, reject) => {
        getNavigation().then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    },

    GetCarouserAll({ commit }) {
      return new Promise((resolve, reject) => {
        getCarouserAll().then(response => {
          console.info(response);
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    },
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
    AddCarousel({ commit }, formItem) {
      return new Promise((resolve, reject) => {
        addCarousel(formItem).then(response => {
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
