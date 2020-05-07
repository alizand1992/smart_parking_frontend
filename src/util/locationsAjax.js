import axios from 'axios';

export const getLocations = (callback) => {
  axios
    .get(
      'api/locations'
    ).then((res) => {
      callback(res.data);
    }).catch((err) => {
      console.log(err);
    });
};