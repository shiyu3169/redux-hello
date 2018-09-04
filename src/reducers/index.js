import { MESSAGE_1, MESSAGE_2 } from '../actions';

let initialState = {
    message: 'Carpe diem'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_1:
            return {
                message: 'this is message 1'
            }
            case MESSAGE_2:
        return {
                message: 'some other message 2'
            }
            default: 
                return state
    }
}