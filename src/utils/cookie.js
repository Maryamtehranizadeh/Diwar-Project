const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=1*24*60*60`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=365*24*60*60`;
};
const getCookie = (cookiName) => {
  return document.cookie
    .split(";")
    .find((item) => item.trim().split("=")[0] === cookiName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
