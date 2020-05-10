import axios from "axios";

const KEY = "AIzaSyAj0qZW5kclD___0SUgdXLfyZ1AtLGvetA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`, //to aviod error
  },
});
