import React from 'react';
import './SuperheroPage.scss';

const SuperheroPage = () => {
    const imageURL = `assets/superman.jpg`;

    return (
        <div className='sph_page_container'>
            <div className='sph_page_btns'>
                <div className='btn btn_update grey_border'>Update</div>
                <div className='btn btn_delete grey_border'>- Delete</div>
            </div>
            <div className='details'>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Nickname:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;Superman</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Real name:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;Clark Kent</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Origin description:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Superpowers:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...</div>
                </div>
                <div className='details_item'>
                    <div className='details_item_header grey_border_bottom'>Catch phrase:</div>
                    <div className='details_item_text'>&nbsp;&nbsp;“Look, up in the sky, it's a bird, it's a plane, it's Superman!”</div>
                </div>
                <div className='details_item'>
                    <div className='sph_images'>
                        <img src={imageURL} alt={'asd'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperheroPage;
