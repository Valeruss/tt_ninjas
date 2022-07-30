import _ from 'lodash';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { remove } from '../../api/superheroesAPI';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './SuperheroPage.scss';

const SuperheroPage = () => {
    const { id } = useParams();
    const router = useNavigate();
    const superheroes = useSelector((state: any) => state.event.superheroes);

    const superhero = _.find(superheroes, { _id: id });

    const removeSuperhero = () => {
        remove(id);
        alert(`${superhero.nickname} deleted !`)
        router(RouteNames.MAIN)
    }

    return (
        <div className='sph_page_container'>
            <div className='sph_page_btns'>
                <div className='btn btn_update grey_border'>Update</div>
                <div 
                    className='btn btn_delete grey_border'
                    onClick={() => removeSuperhero()}
                >- Delete</div>
            </div>
            <div className='details'>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Nickname:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;{superhero.nickname}</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Real name:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;{superhero.nickname}</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Origin description:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;{superhero.origin_description}</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Superpowers:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;{superhero.superpowers}</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Catch phrase:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;{superhero.catch_phrase}</div>
                </div>
                <div className='details_item'>
                    <div className='sph_images'>
                        {/* <img src={imageURL} alt={'asd'}/> */}
                        {superhero.images.map((imageURL: string) =>
                            <div className='sph_images_item' key={imageURL}>
                                <img src={`assets/spiderman_2.jpg`} alt={imageURL}/>
                            </div>    
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperheroPage;
