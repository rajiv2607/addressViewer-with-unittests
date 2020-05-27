import {  put, takeLatest , delay} from "redux-saga/effects";
import * as ActionConstants from "../action/ActionsConstants";
import * as actions from '../action/Actions'


function* showDialogue() {
    yield put(actions.showDialogue(true))
   yield delay(2000)
       yield put(actions.showDialogue(false))
}

function* landingPageSaga() {
    yield takeLatest(ActionConstants.SHOW_DATA, showDialogue);
}


export default landingPageSaga;