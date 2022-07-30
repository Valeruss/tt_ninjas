import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getAll } from '../../api/superheroesAPI';
import SuperheroCard from '../../components/SuperheroCard/SuperheroCard';
import { useDispatch, useSelector } from 'react-redux';
import { EventActionCreators } from '../../store/reducers/event/action-creators';
import CreateModal from '../../components/CreateModal/CreateModal';
import './MainPage.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const superheroes = useSelector((state: any) => state.event.superheroes);
    const [ selectedPage, setSelectedPage ] = useState<number>(1);
    const pages = [1, 2, 3, 4, 5];

    const getSuperheroes = async (page: number) => {
        getAll(5, page).then(data => {
            dispatch(EventActionCreators.setSuperheroes(data));
        });
    }

    useEffect(() => {
        getSuperheroes(0);
    }, []);

    useEffect(() => {
        getSuperheroes(selectedPage - 1);
    }, [selectedPage]);

    return (
        <div className='main_page_container'>
            <div className='sph_create'>
                <CreateModal />
            </div>
            <div className='heroes_list'>
                {superheroes.length === 0 ?
                    <div>Page is empty</div>
                    :
                    superheroes?.map((superhero: any, index: any) =>
                        <div className='heroes_list_card' key={index}>
                            <SuperheroCard superhero={superhero} />
                        </div>
                    )
                }
            </div>
            <div className='pagination_container'>
                <div className='pagination_list'>
                    {pages.map(page => {
                        const selectedBorder = classNames({
                            'selected-page': selectedPage === page,
                        });
                        return (
                            <div
                                key={page}
                                className={`pagination_list_item grey_border ${selectedBorder}`}
                                onClick={() => setSelectedPage(page)}
                            >
                                {page}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
