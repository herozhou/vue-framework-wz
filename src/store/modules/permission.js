import { asyncRouterMap, constantRouterMap } from 'src/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {

      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}


function getNowRouter(asyncRouterMap, to) {
  return asyncRouterMap.some(route => {
      if(to.path.indexOf(route.path) !==-1) {
          return true;
      }
      else if (route.children && route.children.length) { //如果有孩子就遍历孩子
        return  getNowRouter(route.children, to)
      }
  })

}



const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    siderbar_routers:[],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
      // state.routers.forEach(function(e){
      //     if(e.name==="首页"){
      //     state.siderbar_routers=e;
            
      //     }

      // })

    },
     SET_NOW_ROUTERS: (state, to) => {
       
          
          // 递归访问 accessedRouters，找到包含to 的那个路由对象，设置给siderbar_routers
          console.log(state.addRouters)
        state.addRouters.forEach(e => {
          if(e.children&& e.children.length ){
           if( getNowRouter(e.children,to)===true)
                  state.siderbar_routers=e;
          }
      
        })
      

     }

  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }


        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    },
 
  getNowRoutes({ commit }, data) {
      return new Promise(resolve => {
        //data => to
        commit('SET_NOW_ROUTERS', data);
        resolve();
      })
  },
   },
};

export default permission;
