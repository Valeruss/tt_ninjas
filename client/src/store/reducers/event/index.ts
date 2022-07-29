import { EventAction, EventActionEnum, EventState } from './types';

const initialState: EventState = {
    superheroes: [],
};

export default function EventReducer (state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_SUPERHEROES:
            return { ...state, superheroes: action.payload };
        default:
            return state;
    }
}
