import axios from 'axios';

function setModalActive(item) {
  //return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(
    `https://api.themoviedb.org/3/movie/${item}/videos?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko`,
  );
}
function getDetailMovie(id, category) {
  return axios.get(
    `https://api.themoviedb.org/3/${category}/${id}?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko`,
  );
}
function getCastList(id, category) {
  return axios.get(
    `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko`,
  );
}
function getVideos(id, category) {
  return axios.get(
    ` https://api.themoviedb.org/3/${category}/${id}/videos?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko`,
  );
}

export { setModalActive, getDetailMovie, getCastList, getVideos };
