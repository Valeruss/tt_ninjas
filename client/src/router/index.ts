import React from 'react';
import MainPage from '../pages/MainPage/MainPage';
import SuperheroPage from '../pages/SuperheroPage/SuperheroPage';

export interface IRoute {
    path: string;
    element: React.ElementType;
};

export enum RouteNames {
    MAIN = '/superheroes',
    DETAILS = '/superheroes/:id',
};

export const publicRoutes: IRoute[] = [
    { path: RouteNames.MAIN, element: MainPage },
    { path: RouteNames.DETAILS, element: SuperheroPage },
];
