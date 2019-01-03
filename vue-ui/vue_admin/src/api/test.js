import fetch from '@/utils/fetch';

// Success
export function login(data) {
  return fetch({
    method: 'post',
    url: '/user/login',
    data
  });
}

export function echars(params) {
  return fetch({
    method: 'get',
    url: '/test/echarts',
    params
  });
}

// Fail
export function loginFail(data) {
  return fetch({
    method: 'get',
    url: '/user/login',
    data
  });
}

export function syllabusAppend(data) {
  return fetch({
    method: 'post',
    url: '/syllabus/append',
    data
  });
}
