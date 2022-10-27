import axios from "axios";

const URL =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const KEY = "d6aa25e9956e8a80686bef5490140ad1248e127c";

export const apiFavMov = (query) =>
  axios({
    method: "post",
    url: URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + KEY,
    },
    data: {
      query: query,
    },
  });
