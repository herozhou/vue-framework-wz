import fetch from 'utils/fetch';
export function getNavigation(email, password) {
  const data = {
  };
  return fetch({
    url: '/api/user/getNavigation',
    method: 'post',
    data
  });
}

export function getCategoryAll() {
  const data = {
  };
  return fetch({
    url: '/api/user/getCategoryAll',
    method: 'post',
    data
  });
}
export function getCarouser(id) {
  const data = {
  };
  return fetch({
    url: '/api/getCarouser',
    method: 'post',
    data
  });
}
export function getCarouserAll() {
  const data = {
  };
  return fetch({
    url: '/api/user/getCarouserAll',
    method: 'post',
    data
  });
}
export function getUser(password) {
  const data = {
  };
  return fetch({
    url: '/user/getUser',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
