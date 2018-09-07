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
export function addCarousel(formItem) {
  const data = {
    formItem: formItem
  };

  if (formItem.url == "" || formItem.url == null) {
    delete formItem['url'];
  }
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null) {
    return fetch({
      url: '/api/user/addCarousel',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/user/updateCarousel',
      method: 'post',
      data
    });
  }
}
export function addNavigation(formItem) {
  const data = {
    formItem: formItem
  };

  if (formItem.url == "" || formItem.url == null) {
    delete formItem['url'];
  }
  console.info(formItem.id);
  if(formItem.id == '' || formItem.id == null) {
    return fetch({
      url: '/api/user/addNavigation',
      method: 'post',
      data
    });
  }else {
    return fetch({
      url: '/api/user/updateNavigation',
      method: 'post',
      data
    });
  }
}

export function deleteCarouser(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/user/deleteCarouser',
    method: 'post',
    data
  });
}
export function deleteNavigation(id) {
  const data = {
    id: id
  };

  return fetch({
    url: '/api/user/deleteNavigation',
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
