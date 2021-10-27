import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  getContactSuccess,
  getContactRequest,
  getContactError,
} from "./phonebook-actions.js";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040/";
export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("contacts", contact)
    .then((response) => dispatch(addContactSuccess(response.data)))
    .catch((error) => dispatch(addContactError(error)));
};
export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete("contacts/" + id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
export const contactFetch = () => (dispatch) => {
  dispatch(getContactRequest());
  axios
    .get("contacts")
    .then((response) => dispatch(getContactSuccess(response.data)))
    .catch((error) => dispatch(getContactError(error)));
};
