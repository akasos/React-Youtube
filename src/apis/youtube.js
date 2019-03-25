import axios from "axios";
const KEY = "AIzaSyDHGBiqcyQwFjxtb7PsJ4gG7Wu2vSyKBXs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
