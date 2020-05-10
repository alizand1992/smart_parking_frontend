import axios from 'axios';

export const getParkingSpots = (callback) => {
  axios.get('/api/parking_spots')
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
