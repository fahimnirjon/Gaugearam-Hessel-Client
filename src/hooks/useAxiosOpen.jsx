import axios from "axios";

const axiosOpen = axios.create({
  baseURL: "https://restaurant-server-two.vercel.app",
});

const useAxiosOpen = () => {
  return axiosOpen;
};

export default useAxiosOpen;
