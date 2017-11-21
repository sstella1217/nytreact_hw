import axios from "axios";

const BASEURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json"
const APIKEY ="d083414819ad4b7e8110978537010bf6"

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};