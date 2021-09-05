import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

export { api };
export default {
  install: (app) => {
    app.config.globalProperties.$http = api;
    app.config.globalProperties.$axios = axios;
  },
};
