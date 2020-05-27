import * as ActionsConstants from './ActionsConstants'


export function printAddress(id) {
    return {
        id : id,
        type  : ActionsConstants.SHOW_DATA
    }
}

export function showDialogue(value ) {
    return{
        value,
        type : ActionsConstants.SHOW_DIALOGUE
    }
}