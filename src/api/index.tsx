import { BACKEND_URL } from '../../config/env';
let _headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function createCall(path, data = null, headers = {}, method = 'POST') {
  const merged = {
    ..._headers,
    ...headers,
  };

  let body = {};
  if (data) {
    body = data;
  }

  let strData = JSON.stringify(body);
  if (method == 'GET')
    return fetch(`${BACKEND_URL}${path}`, {
      method: method,
      headers: merged,
    })
      .then((resp) => resp.json())
      .catch((error) => {
        if (error.code == 400) console.log(error.message);
      });
  else
    return fetch(`${BACKEND_URL}${path}`, {
      method: method,
      headers: merged,
      body: strData,
    })
      .then((resp) => resp.json())
      .catch((error) => {
        if (error.code == 400) console.log(error.message);
      });
}
export async function checkSignup(token: string) {
  return createCall(`user/checkSignup`, {}, {authorization: token}, "GET")
}
export async function signup(token: string, issuer: string, aptosWallet: string, nickname: string, username: string, email: string) {
  return createCall('user/signup', { issuer, aptosWallet, nickname, username, email }, { authorization: token });
}
export async function getAllUser(token: string) {
  return createCall(`user/getall`, {}, {authorization: token}, "GET")
}