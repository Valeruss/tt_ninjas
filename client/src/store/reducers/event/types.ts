export interface EventState {
    superheroes: [];
};

export enum EventActionEnum {
    SET_SUPERHEROES = "SET_SUPERHEROES",
};

export interface SetSuperheroes {
    type: EventActionEnum.SET_SUPERHEROES;
    payload: [];
};

export type EventAction = 
    SetSuperheroes;