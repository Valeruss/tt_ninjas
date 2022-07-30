import _ from 'lodash';
import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import { update } from '../../api/superheroesAPI';
import './UpdateModal.scss';

const UpdateModal = ({ _id }: any) => {
    const route = useNavigate();
    const [ modalIsOpen, setIsModalOpen ] = useState(false);
    const [ nickname, setNickname ] = useState<string>('');
    const [ real_name, setRealName ] = useState<string>('');
    const [ origin_description, setOriginDescription ] = useState<string>('');
    const [ superpowers, setSuperpowers ] = useState<string>('');
    const [ catch_phrase, setCatchPhrase ] = useState<string>('');
    const [ images, setImages ] = useState<string[]>([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateSuperhero = async () => {
        interface updSuperhero {
            nickname: string;
            real_name: string;
            origin_description: string;
            superpowers: string;
            catch_phrase: string;
            images: string[];
        }
        
        const updSuperhero = {
            nickname, real_name, origin_description, superpowers, catch_phrase, images,
        };

        _.map(_.keys(updSuperhero), (objectKey) => {
            if (
                updSuperhero[objectKey as keyof updSuperhero] === '' ||
                updSuperhero[objectKey as keyof updSuperhero].length === 0
            )
                delete updSuperhero[objectKey as keyof updSuperhero];
        });
        
        await update(_id, updSuperhero);

        setNickname('');
        setRealName('');
        setOriginDescription('');
        setSuperpowers('');
        setCatchPhrase('');
        setImages([]);
        closeModal();
        route(RouteNames.MAIN);
        alert('Superhero updated');
    };

    return (
        <div>
            <div className='btn btn_update grey_border' onClick={openModal}>Update</div>
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
                        <div className='desc'>Re-upload, if u wanna upload wultiple images. All images will be saved.</div>
                        <input type="file" id="myFile" name="filename" onChange={(event) => setImages([...images, _.replace(event.target.value, 'C:\\fakepath\\', '')])} />
                    </div>
                </div>
                <div className='modal_btns'>
                    <div className='modal_btns_btn' onClick={updateSuperhero}>Update</div>
                    <div className='modal_btns_btn' onClick={closeModal}>Cancel</div>
                </div>
            </Modal>
        </div>
    );
};

export default UpdateModal;
