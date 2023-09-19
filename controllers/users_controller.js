const User = require("../model/users");
const sendOtp = require("../model/send_otp");
const generateOtp = require("../config/generate_otp");
const ip = require("../config/user_ip");

//API to send send otp
module.exports.sendOtp = async (req, res) => {
  try {
    const phone = req.body.phone;
    const otp = await generateOtp.genOtp(res, phone);
    console.log(otp);
    const isOtpExist = await sendOtp.findOne({ phone: phone });

    if (!isOtpExist) {
      await sendOtp.create({
        phone: phone,
        otp: otp,
      });
      return res.status(201).json({ message: "success" });
    } else {
      isOtpExist.deleteOne();
      await sendOtp.create({
        phone: phone,
        otp: otp,
      });
      return res.status(201).json({ message: "Otp resent" });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: "Error while sending the otp" });
  }
};

// API to register the user
module.exports.registerUser = async (req, res) => {
  try {
    const { user_name, phone, otp } = req.body;
    const userIp = await ip.userIp(req, res);
    console.log(userIp);
    const isNumberExist = await sendOtp.findOne({ phone: phone });

    if (isNumberExist && isNumberExist.otp) {
      const verifyOtp = await generateOtp.verifyOtp(otp, isNumberExist.otp);
      if (verifyOtp === true) {
        const newUser = await User.create({
          user_name: user_name,
          phone: phone,
          is_number_verified: true,
        });
        isNumberExist.deleteOne();
        return res.json({
           status: 'You are registered successfully',
            data: 'Your validated Ip is', userIp
        });
      } else {
        return res.status(403).json({ message: "invalid otp" });
      }
    } else {
      return res.status(403).json({ message: "invalid mobile number" });
    }
  } catch (error) {
    if (error.name === "MongoServerError") {
      return res
        .status(200)
        .json({ message: "Your number is already verified and registered" });
    } else {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
};
