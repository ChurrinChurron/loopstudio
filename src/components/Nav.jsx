import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg';
import Logo from '../assets/logo.svg'
import { useState } from 'react';

const Nav = () => {

const [menu, setMenu] = useState(false);

  return (
    <nav className='flex items-center justify-between'>
        <a href="#">
            <img src={Logo} className='h-7' alt="loopstudio Logo" />
        </a>
        <button className='md:hidden' onClick={() => setMenu(true)}>
            <img src={Hamburger} className='h-5' alt="icon hamburger" />
        </button>
        <div className='hidden md:flex md:gap-7'>
            <a href="#" className='text-white border-b-2 border-transparent font-medium hover:border-b-2 hover:border-white'>About</a>
            <a href="#" className='text-white border-b-2 border-transparent font-medium hover:border-b-2 hover:border-white'>Careers</a>
            <a href="#" className='text-white border-b-2 border-transparent font-medium hover:border-b-2 hover:border-white'>Events</a>
            <a href="#" className='text-white border-b-2 border-transparent font-medium hover:border-b-2 hover:border-white'>Products</a>
            <a href="#" className='text-white border-b-2 border-transparent font-medium hover:border-b-2 hover:border-white'>Support</a>
        </div>
        <div className={`${menu ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 px-6 py-8 z-20 w-full h-screen bg-black transition duration-300 `}>
            <div className='flex justify-between items-center'>
                <a href="#">
                    <img src={Logo} className='h-7' alt="loopstudio Logo" />
                </a>
                <button onClick={() => setMenu(false)}>
                    <img src={Close} className='h-6' alt="icon close" />
                </button>
            </div>
            <a href="#" className='text-white block mt-48 text-4xl uppercase font-light'>About</a>
            <a href="#" className='text-white block mt-6 text-4xl uppercase font-light'>Careers</a>
            <a href="#" className='text-white block mt-6 text-4xl uppercase font-light'>Events</a>
            <a href="#" className='text-white block mt-6 text-4xl uppercase font-light'>Products</a>
            <a href="#" className='text-white block mt-6 text-4xl uppercase font-light'>Support</a>
        </div>
    </nav>
  )
}

export default Nav