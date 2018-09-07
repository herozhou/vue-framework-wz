//import {addNavigation, addCarousel, getCarouser, getNavigation, getCarouserAll, getCategoryAll, deleteCarouser} from '../../api/carouser';
import * as carouserApi from '../../api/carouser';
const carouser = {

  actions: {
    //Action 中的回调函数会接收一个上下文 context 对象，它包含了当前 store 中所有属性和方法，但其不是 store 本身。你可以通过 context.commit 来提交 mutation，也可以通过 context.state 与 context.getters 来获取 state 和 getters。
    //商品分类列表
    GetCategoryAll({ commit }) {
      return new Promise((resolve, reject) => {
        carouserApi.getCategoryAll().then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          alert(error);
          reject(error);
        });
      });
    },
    GetNavigation({ commit }) {
      return new Promise((resolve, reject) => {
        carouserApi.getNavigation().then(response => {
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
        carouserApi.getCarouserAll().then(response => {
          //    console.info(response);
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
        carouserApi.getCarouser().then(response => {
          resolve(response);
        }).catch(error => {
          //   console.info(error)
          alert(error);
          reject(error);
        });
      });
    },
    AddCarousel({ commit }, formItem) {
      return new Promise((resolve, reject) => {
        carouserApi.addCarousel(formItem).then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          //  alert(error);
          reject(error);
        });
      });
    },
    AddNavigation({ commit }, formItem) {
      return new Promise((resolve, reject) => {
        carouserApi.addNavigation(formItem).then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          //  alert(error);
          reject(error);
        });
      });
    },
    DeleteCarouser({ commit }, id) {
      return new Promise((resolve, reject) => {
        carouserApi.deleteCarouser(id).then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          //  alert(error);
          reject(error);
        });
      });
    },
    DeleteNavigation({ commit }, id) {
      return new Promise((resolve, reject) => {
        carouserApi.deleteNavigation(id).then(response => {
          resolve(response);
        }).catch(error => {
          console.info(error)
          //  alert(error);
          reject(error);
        });
      });
    }
  }
};

export default carouser;
