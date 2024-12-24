import axios from "axios";

// axios'un temel ayarları yapılmış olan bir kopyasını oluştur
const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",

  headers: {
    'x-rapidapi-key': '8eec15a9b2msh3fb53c6c3bd1947p1a9aaajsn6d16c50061d4',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'

  },
});

export default api;