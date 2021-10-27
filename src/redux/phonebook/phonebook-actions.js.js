import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const getContactRequest = createAction("contacts/getContactRequest");
const getContactSuccess = createAction("contacts/getContactSuccess");
const getContactError = createAction("contacts/getContactError");

const changeFilter = createAction("phonebook/changeFilter");

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  getContactError,
  getContactSuccess,
  getContactRequest,
  changeFilter,
};
