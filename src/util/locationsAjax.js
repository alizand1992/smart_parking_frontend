import axios from 'axios';

export const getLocations = (callback) => {
  axios.get('/api/locations')
    .then((res) => {
      callback(res.data);
    }).catch((err) => {
      console.log(err);
    });
};

export const addLocation = (data, callback) => {
  axios.post('/api/locations', {
    ...data,
  }).then(() => {
    callback();
  }).catch((err) => {
    callback(err.response.data.errors);
  });
};

export const requestAuthToken = (callback) => {
  axios.get('/api/locations/new')
    .then((res) => {
      callback(res.data);
    }).catch((err) => {
      console.log(err);
    });
};

