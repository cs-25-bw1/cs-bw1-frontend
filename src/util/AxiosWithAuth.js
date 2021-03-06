import axios from "axios";

const axiosWithAuth = type => {
  const token = localStorage.getItem("token");
  // const apiUrl = process.env.DB_URL
  // const apiUrl = 'https://lambda-mud-test.herokuapp.com/'
  // const apiUrl = "https://cs25-llamas.herokuapp.com";
  const apiUrl = "https://cs25-those-llamas.herokuapp.com/";

  let key;

  if (type === "auth") {
    key = "X-CSRFToken";
  } else if (type === "app") {
    key = "Authorization";
  }

  return axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      [key]: `Token ${token}`
    }
  });
};

export default axiosWithAuth;
