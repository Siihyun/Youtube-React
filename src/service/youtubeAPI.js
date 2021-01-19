class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  videoSearch = async (query) => {
    try {
      return await this.youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: query,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  getPopularVideo = async () => {
    try {
      return await this.youtube.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default Youtube;
