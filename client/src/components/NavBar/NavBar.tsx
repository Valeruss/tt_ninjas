import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './NavBar.scss';

const NavBar = () => {
    const router = useNavigate();

    return (
        <div className='navbar grey_border_bottom'>
            <div className='navbar_menu'>
                <div 
                    className='navbar_menu_item' 
                    onClick={() => router(RouteNames.MAIN)}
                >
                    Superheroes
                </div>
            </div>
        </div>
    );
};

export default NavBar;
