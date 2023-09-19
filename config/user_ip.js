const ipInfo = require("ipinfo");
const axios = require("axios");
const { response } = require("express");

module.exports.userIp = async(req, res) => { 
  // Get information about a known ip
  ipInfo(response.data, async(err, cLoc) => {
    console.log(err || cLoc);
});
return ipInfo();
}