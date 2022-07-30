import _ from 'lodash';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { create } from '../../api/superheroesAPI';
import './CreateModal.scss';

const CreateModal = () => {
    const [ modalIsOpen, setIsModalOpen ] = useState(false);
    const [ nickname, setNickname ] = useState('');
    const [ real_name, setRealName ] = useState('');
    const [ origin_description, setOriginDescription ] = useState('');
    const [ superpowers, setSuperpowers ] = useState('');
    const [ catch_phrase, setCatchPhrase ] = useState('');
    const [ images, setImages ] = useState<string[]>([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const createSuperhero = () => {
        console.log('asd')
        const newSuperhero = {
            nickname, real_name, origin_description, superpowers, catch_phrase, images
        };
        create(newSuperhero);

        setNickname('');
        setRealName('');
        setOriginDescription('');
        setSuperpowers('');
        setCatchPhrase('');
        setImages([]);
        closeModal();
    };

    return (
        <div>
            <div className='sph_create_btn grey_border' onClick={openModal}>+ Create</div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className='Modal'
                    overlayClassName='Overlay'
                >
                    <div className='modal_content'>
                        <div className='modal_content_item'>
                            <div>Nickname</div>
                            <input value={nickname} onChange={(event) => setNickname(event.target.value)} />
                        </div>
                        <div className='modal_content_item'>
                            <div>Real name</div>
                            <input value={real_name} onChange={(event) => setRealName(event.target.value)} />
                        </div>
                        <div className='modal_content_item'>
                            <div>Origin description</div>
                            <input value={origin_description} onChange={(event) => setOriginDescription(event.target.value)} />
                        </div>
                        <div className='modal_content_item'>
                            <div>Superpowers</div>
                            <input value={superpowers} onChange={(event) => setSuperpowers(event.target.value)} />
                        </div>
                        <div className='modal_content_item'>
                            <div>Catch phrase</div>
                            <input value={catch_phrase} onChange={(event) => setCatchPhrase(event.target.value)} />
                        </div>
                        <div className='modal_content_item'>
                            <div>Images</div>
                            <input type="file" id="myFile" name="filename" onChange={(event) => setImages([...images, _.replace(event.target.value, 'C:\\fakepath\\', '')])} />
                        </div>
                    </div>
                    <div className='modal_btns'>
                        <div className='modal_btns_btn' onClick={createSuperhero}>Create</div>
                        <div className='modal_btns_btn' onClick={closeModal}>Cancel</div>
                    </div>
                </Modal>
        </div>
    );
};

export default CreateModal;
