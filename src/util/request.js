import axios from 'axios';

const instance = axios.create({
  timeout: 3000, // 请求超时
});

export function get(url, config) {
  // eslint-disable-next-line no-undef
  return insatance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}
export function put(url, config) {
  // eslint-disable-next-line no-undef
  return insatance.put(url, config);
}

export function remove(url, data, config) {
  return instance.delete(url, data, config);
}
