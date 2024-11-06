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

const expireCookie = (cookiName) => {
  document.cookie = `${cookiName}=; max-age=0; path=/;`;
};


export { setCookie, getCookie, expireCookie };
