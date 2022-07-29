import { EventActionEnum, SetSuperheroes } from './types';

export const EventActionCreators = {
    setSuperheroes: (payload: []): SetSuperheroes => ({ type: EventActionEnum.SET_SUPERHEROES, payload }),
};
