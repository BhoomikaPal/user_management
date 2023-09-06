import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (user) => {
  try {
    return await axios.post(`${URL}/add`, user);
  } catch (error) {
    console.log("Error while calling addUser Api ", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error while calling getUsers", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error while calling getuser API", error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("error while edit api", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete", error);
  }
};
