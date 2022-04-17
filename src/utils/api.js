import axios from "axios";

const getApi = (url, params = {}, header = {}) =>
  axios
    .get(url, { params, header })
    .then((response) => response)
    .catch((e) => {
      throw e;
    });

export { getApi };
