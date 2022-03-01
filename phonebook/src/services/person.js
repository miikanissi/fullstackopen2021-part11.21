import axios from "axios";
const baseUrl = "/api/persons";

function getAllPersons() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function createPerson(newObject) {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
}

function updatePerson(id, newObject) {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
}

function deletePerson(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => console.log(response));
}

const exportedObject = {
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
};

export default exportedObject;
