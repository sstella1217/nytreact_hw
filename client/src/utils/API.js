import axios from "axios";

const BASEURL ="external: //api.nytimes.com/svc/search/v2/articlesearch.json"
const APIKEY ="d083414819ad4b7e8110978537010bf6"

export default {
  // Gets all Articles
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

