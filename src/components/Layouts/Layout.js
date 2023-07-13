import './Layout.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from '../Icons';
import SearchBar from '../../util/SearchBar/SearchBar';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const locationType = location.pathname.split('/')[1];

    return <>
    <div className='layoutHeading'>
        <div>
        { locationType !== "" && <LeftArrowIcon className="layoutHeading-svg" onClick={()=>navigate(-1)} />}
        <h1 className='heading1' onClick={()=>navigate('/')}>Meetup</h1>
        </div>
        <SearchBar placeholder="Search by event, title or tags." />
    </div>
    <main>
        {children}
    </main>
    </>
};

export default Layout;