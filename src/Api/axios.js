import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2024-a9a9c/us-central1/api",

  //deployed version of firebase function --not yet deployed

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-2rzn.onrender.com",
});

export { axiosInstance };
