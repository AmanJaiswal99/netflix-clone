const APIKEY = "847d647f438c42a900b088a3efefba63";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
    fetchRated: `/movie/top_rated?api_key=${APIKEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchComedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchAction: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchRomance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchHorror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests