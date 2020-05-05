import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID swUUQhBN6zdaakRbap9fMUZXZXNgFwWAB46dmOvpIew",
  },
});
