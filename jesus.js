// Jesus' handlers
const axios = require('axios');
const APIkey = "vfes7Xikbb62AUkG9Gikwo0xmCLT5tD8";
const ROOT_ADDR = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";


function objectLength(obj) {
    var result = 0;
    for(var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
      }
    }
    return result;
  }

// Register a new handler
const jesusHandler = function(req, res) {
    toReturn = {
        succ: false,
        content: {},
    };
    let params = req.query;
    console.log(req.query);
    if (objectLength(params)!==1){
        toReturn.message = "Input just one parameter named 'q', its value will be the the result of searching that on the New York Times news -- For example /jesus?q=San Francisco";
        // Send the response to the client
        res.send(toReturn);
    }
    else{
        if(!params['q']){
            toReturn.message = "The parameter has to be named 'q'";
            // Send the response to the client
            res.send(toReturn);
        }
        else{
            address = ROOT_ADDR + encodeURI(params.q) + "&api-key=" + APIkey;
            axios.get(address)
            .then((response) => {
                toReturn.succ = true;
                toReturn.content = response.data;
                // Send the response to the client
                res.send(toReturn);
            })
            .catch((error) => {
                console.log(error);
                // Send the response to the client
                toReturn.message = "Unexpected error"
                res.send(toReturn);
            });
        }
    }
}

module.exports = jesusHandler;