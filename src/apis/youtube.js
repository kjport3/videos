import axios from "axios";

const KEY = 'AIzaSyDXGL4wJt7iTBVt79eGhWT2_b8oFnQcg5Y';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
