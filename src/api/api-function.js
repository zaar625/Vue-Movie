import axios from 'axios';

function setModalActive(item) {
  //return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(
    `https://api.themoviedb.org/3/movie/${item}/videos?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko`,
  );
}

export { setModalActive };
