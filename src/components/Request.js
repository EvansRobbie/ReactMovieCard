
const API_KEY ='482fa4c2ace033590567fe52fe91270c'

const Request = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US`
}
export default Request