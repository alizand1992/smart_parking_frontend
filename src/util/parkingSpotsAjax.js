import axios from 'axios';

export const getParkingSpots = (callback) => {
  axios.get('/api/parking_spots')
    .then((res) => {
      callback(res.data);
    }).catch((err) => {
      console.log(err);
    });
};

export const getParkingSpotsForLocation = (location_id, callback) => {
  axios.get(`/api/parking_spots/available/${location_id}`)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
    });
};

export const syncParkingSpots = (callback) => {
  axios.get('/api/parking_spots/sync')
    .then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
    });
};

export const linkSpotToLocation = (location_id, spot_id, authenticity_token, callback) => {
  axios.post('/api/location/parking_spot/link', {
    authenticity_token,
    location_id,
    spot_id,
  }).then(() => {
    callback();
  }).catch((err) => {
    console.log(err);
  });
};

export const unlinkSpotFromLocation = (location_id, spot_id, authenticity_token, callback) => {
  axios.post('/api/location/parking_spot/unlink', {
    authenticity_token,
    location_id,
    spot_id,
  }).then(() => {
    callback();
  }).catch((err) => {
    console.log(err);
  });

};