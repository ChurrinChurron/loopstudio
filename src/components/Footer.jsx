import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='bg-black py-12 text-center text-white md:flex md:justify-between md:items-start md:px-8 xl:px-32'>
        <div>
            <a href="#">
                <img src={Logo} className='block mx-auto w-36 md:mx-0' alt="loopstudio logo " />
            </a>
            <div className='flex flex-col items-center gap-5 mt-8 mb-12 md:flex-row md:justify-center md:mb-0'>
                <a href="#" className='font-medium border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white'>About</a>
                <a href="#" className='font-medium border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white'>Careers</a>
                <a href="#" className='font-medium border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white'>Events</a>
                <a href="#" className='font-medium border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white'>Porducts</a>
                <a href="#" className='font-medium border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white'>Support</a>
            </div>
        </div>
        <div>
            <div className='flex justify-center items-center gap-4 md:justify-end'>
                <a href="#"><img src={Facebook} className='pb-1 border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white' alt="facebook logo" /></a>
                <a href="#"><img src={Twitter} className='pb-1 border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white' alt="twitter logo" /></a>
                <a href="#"><img src={Pinterest} className='pb-1 border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white' alt="pinterest logo" /></a>
                <a href="#"><img src={Instagram} className='pb-1 border-b-2 border-transparent transition duration-200 hover:border-b-2 hover:border-white' alt="instagram logo" /></a>
            </div>
            <p className='mt-6 font-medium text-gray-500'>© 2021 Loopstudios. All rights deserved.</p>
        </div>
    </footer>
  )
}

export default Footer