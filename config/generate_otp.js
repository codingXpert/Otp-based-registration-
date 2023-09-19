const twilio = require('twilio');
require("dotenv/config");
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = new twilio(accountSid, authToken);

//generate otp and send to user mobile number
module.exports.genOtp = async(res, phone) => {
    const mobNumber = '+91' + JSON.stringify(phone);  
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 

    client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: '+14705180842',
      to: mobNumber,
    })
    .then(() => {
      res.json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending OTP');
    });
    return otp;
}

// verify the entered and stored otp
module.exports.verifyOtp = async(enteredOtp, storedOtp) => {
    const match = (enteredOtp === storedOtp);
    if(match)
    console.log(match);
    return match;
}
