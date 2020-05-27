import {  put, takeEvery , delay} from "redux-saga/effects";
import * as ActionConstants from "../action/ActionsConstants";
import * as actions from '../action/Actions'


function* showDialogue() {
    put(actions.showDialogue(true))

    setTimeout(()=>{
        put(actions.showDialogue(false))
    },3000)
}

function* landingPageSaga() {
    yield takeEvery(ActionConstants.SHOW_DATA, showDialogue);
}


export default landingPageSaga;