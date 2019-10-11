import { makeGetRequest, makePostRequest, uploadFile, makePutRequest, makeDeleteRequest } from "../http-connectors";
import { BASE_URL, googlePlacesConfig, cloudinaryConfig } from '../config/index';

export const login = loginData => {
  return new Promise((resolve, reject) => {
    makePostRequest(
      BASE_URL + "/login",
      false,
      loginData
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};
