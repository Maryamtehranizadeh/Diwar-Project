import api from "../configs/api";

const sendOTP = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return { response: response };
  } catch (error) {
    return { error: error };
  }
};
console.log(api.defaults.baseURL);

export { sendOTP };
