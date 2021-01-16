import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
  }

  videoSearch = async (url) => {
    try {
      return await axios.get(url).then((response) => [...response.data.items]);
    } catch (error) {
      console.error(error);
    }
  };
}

export default Youtube;
