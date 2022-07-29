import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../api/superheroesAPI';
import SuperheroCard from '../../components/SuperheroCard/SuperheroCard';
import { RouteNames } from '../../router';
import './MainPage.scss';

const MainPage = () => {
    const router = useNavigate();
    const [ superheroes, setSuperheroes ] = useState([]);

    useEffect(() => {
        getAll().then(data => {
            setSuperheroes(data);
            console.log(data[0])
        });
    }, []);

    return (
        <div className='main_page_container'>
            <div className='sph_create'>
                <div className='sph_create_btn grey_border'>+ Create</div>
            </div>
            <div className='heroes_list'>
                {superheroes?.map((superhero: any, index) =>
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
