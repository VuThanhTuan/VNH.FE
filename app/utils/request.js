const BASE_URL = process.env.REACT_APP_API_URL;
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  console.log('response', response);
  // if (response.status === 204 || response.status === 205) {
  //   return null;
  // }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options, saveFile = false) {
  let callback;
  if (saveFile) {
    callback = saveFile;
  } else {
    callback = parseJSON;
  }

  return fetch(BASE_URL + url, options).then(callback);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} method The URL we want to request
 * @param  {object} body The options we want to pass to "fetch"
 * @param {object} isAuth The response data
 */
export const createRequest = (method = 'GET', body, isAuth = true) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    },
    method,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (!isAuth) {
    delete options.header.accessToken;
  }

  if (body instanceof FormData) {
    delete options.headers.Accept;
    delete options.headers['Content-Type'];
    options.body = body;
  }

  return options;
};
