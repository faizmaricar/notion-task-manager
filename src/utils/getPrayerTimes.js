import axios from "axios";

export default async function getPrayerTimes(v) {
  var options = {
    method: "GET",
    url: "https://www.muis.gov.sg/api/pagecontentapi/GetPrayerTime",
    params: { v },
    headers: {
      Accept: "*/*",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}
