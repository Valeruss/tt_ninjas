import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './SuperheroCard.scss';

const SuperheroCard = ({ superhero }: any) => {
    const router = useNavigate();
    const imageURL = `assets/superman.jpg`;

    return (
        <div 
            className='sph_card_container' 
            
        >
            <div className='sph_image'>
                <img src={imageURL} alt={superhero.nickname}/>
            </div>
            <div className='sph_nickname'>{superhero.nickname}</div>

            <div className='sph_btn'>
                <div 
                    className='sph_btn_details grey_border'
                    onClick={() => router(RouteNames.MAIN + '/' + superhero._id)}
                >
                    Details
                </div>
            </div>
        </div>
    );
};

export default SuperheroCard;
