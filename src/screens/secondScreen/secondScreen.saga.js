import { put, call, all, takeLatest, delay } from "redux-saga/effects";
// import  from "redux-saga";

function* increaseAsync() {
  yield delay(4000);
  console.log("herer");
  yield put({ type: "INCREMENT_ASYNC", payload: 3 });
}

export function* watchSecondScreenSaga() {
  yield takeLatest("INCREMENT", increaseAsync);
}
