import React from "react";
import axios from "axios";

function GetData(){
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
      headers: {
        'X-RapidAPI-Key': 'faa3a32a1bmsh74d15fe0a7dc28bp1902b5jsn8da2d3d8f568',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


}

export default GetData;