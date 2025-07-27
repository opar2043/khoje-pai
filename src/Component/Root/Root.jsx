
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto my-4'>
            <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;