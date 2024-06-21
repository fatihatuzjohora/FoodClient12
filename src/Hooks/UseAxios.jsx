import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxios = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuth();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // console.log('request stoped by interceptors',token);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        //do sumtiong request eerror
        return Promise.reject(error);
      }
    );
    //interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response.status;
        // console.log('error status in interceptor', status);
        //401,403 logout and login page
        if (status === 401 || status === 403) {
          await logOut();
          navigate("/signin");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return [axiosSecure];
};

export default UseAxios;
