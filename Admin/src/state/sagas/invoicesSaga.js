import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, getDataInvoicesSuccess } from "../actions";
import InvoicesService from "../../Services/invoices.service";
import { toastSuccess } from "../../Helper/toastHelper";

function* fetchListUser() {
    try {
      const response = yield call(InvoicesService.listUser);
      console.log(response)
      yield put(getDataInvoicesSuccess(response));
    } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
  }
function* addListUser(action) {
    try {
      yield call(InvoicesService.addUser,action.payload);
      const response = yield call(InvoicesService.listUser);
      yield put(getDataInvoicesSuccess(response));
      toastSuccess('Add invoice success');
      // const response = yield call(InvoicesService.listUser);
      // console.log(response)
      // yield put(getDataInvoicesSuccess(response));
    } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
  }
  function* handlerDeleteUser(action) {
    try {
      yield call(InvoicesService.deleteInvoices, action.payload);
      const response = yield call(InvoicesService.listUser);
      yield put(getDataInvoicesSuccess(response));
    } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
  }

  function* handlerEditUser(action) {
    try {
      yield call(InvoicesService.editUser, action.payload);
      console.log("action.payload ", action.payload);
      const response = yield call(InvoicesService.listUser);
      yield put(getDataInvoicesSuccess(response));
      toastSuccess('Edit success')
    } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
  }
  export default function* invoices() {
    yield takeLatest(Actions.GET_INVOICES, fetchListUser);
    yield takeLatest(Actions.DELETE_INVOICES, handlerDeleteUser);
    yield takeLatest(Actions.EDIT_INVOICES, handlerEditUser);
    yield takeLatest(Actions.ADD_INVOICES, addListUser);
  }
  