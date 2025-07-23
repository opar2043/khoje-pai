
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto my-4'>
            <Outlet />
            </div>
            {/* You can add a footer here */}
        </div>
    );
};

export default Root;