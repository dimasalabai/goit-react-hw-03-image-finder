import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.unsplash.com',
// });

export const getAllPhotos = () => {
  return axios.get(
    'https://api.unsplash.com/search/photos/?page=1&query=green&client_id=anhlsyga1Recc9LBaXpsAT-0U_iF-t5TEASiV7wiGUE'
  );
};
