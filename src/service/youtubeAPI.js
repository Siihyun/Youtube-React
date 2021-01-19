import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
    this.baseUrl = "https://www.googleapis.com/youtube/v3/";
  }

  videoSearch = async (query) => {
    let url =
      this.baseUrl +
      `search?part=snippet&maxResults=25&type=video&q=${query}&key=` +
      this.key;

    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  getPopularVideo = async () => {
    let url =
      this.baseUrl +
      "videos?part=snippet&chart=mostPopular&maxResults=25&key=" +
      this.key;
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };
}

export default Youtube;
