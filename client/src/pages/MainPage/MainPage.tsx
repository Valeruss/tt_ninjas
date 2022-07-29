import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../api/superheroesAPI';
import SuperheroCard from '../../components/SuperheroCard/SuperheroCard';
import { RouteNames } from '../../router';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.scss';
import { EventActionCreators } from '../../store/reducers/event/action-creators';

const MainPage = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const superheroes = useSelector((state: any) => state.event.superheroes);
    // const [ superheroes, setSuperheroes ] = useState([]);

    useEffect(() => {
        getAll().then(data => {
            // setSuperheroes(data);
            dispatch(EventActionCreators.setSuperheroes(data));
        });
    }, []);

    return (
        <div className='main_page_container'>
            <div className='sph_create'>
                <div className='sph_create_btn grey_border'>+ Create</div>
            </div>
            <div className='heroes_list'>
                {superheroes?.map((superhero: any, index: any) =>
                    <div className='heroes_list_card grey_border' key={index}>
                        <SuperheroCard superhero={superhero} />
                    </div>
                )}
            </div>
            <div className='pagination_container'>
                <div className='pagination-list'>
                    asd
                </div>
            </div>
        </div>
    );
};

export default MainPage;
