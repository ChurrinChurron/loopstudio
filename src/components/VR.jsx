import VRMobile from '../assets/mobile/image-interactive.jpg'
import VRDesktop from '../assets/desktop/image-interactive.jpg';

const VR = () => {
  return (
    <section className='py-24 px-6 lg:flex lg:justify-center lg:items-end'>
        <picture>
            <source media="(min-width: 768px)" srcSet={VRDesktop} />
            <img src={VRMobile} className='w-full max-w-lg block mx-auto lg:max-w-2xl' alt="VR" />
        </picture>
        <article className='lg:w-1/2 lg:bg-white lg:z-10 lg:relative lg:right-32 lg:py-4 lg:px-16 lg:max-w-xl'>
          <h2 className='uppercase text-center text-4xl my-8 font-light lg:text-start'>The leader in <br/> interactive VR</h2>
          <p className='text-center text-gray-500 leading-7 font-medium mx-4 lg:text-start lg:mx-0'>Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
          </p>
        </article>
    </section>
  )
}

export default VR;