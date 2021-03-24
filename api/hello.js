// const axios = require('axios');
import axios from "axios"
module.exports = async(req, res) => {
    let postHooks = await axios.get('https://development.homestaymatch.com/get-csrf')
    res.json({status:postHooks.headers})
  }
  