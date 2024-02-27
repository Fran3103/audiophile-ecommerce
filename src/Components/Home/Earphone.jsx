import imgMobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import imgTablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import imgDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Earphone = () => {
    useEffect(() => {
        // Al cargar la página, desplazar hacia arriba
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='flex flex-col  justify-center items-center gap-3 w-[327px]  md:w-[689px] lg:w-full lg:max-w-[1100px] m-auto md:flex-row mb-12'>
        <div className='w-full  md:w-[339px] md:h-[320px] lg:w-[540px] rounded-lg'>
            <img src={imgMobile} alt="mobile" className='rounded-lg md:hidden w-full '/>
            <img src={imgTablet} alt="tablet" className='hidden md:block lg:hidden rounded-lg w-full ' />
            <img src={imgDesktop} alt="desktop" className='hidden lg:block rounded-lg w-full h-[320px]' />
        </div>
        <div className='w-full h-[200px] md:w-[339px] md:h-[320px] lg:w-[540px]    p-8 lg:pl-20 bg-[#dbdbdb] rounded-lg flex flex-col justify-between md:justify-center md:gap-8'>
            <h2 className='text-3xl font-semibold'>YX1 EARPHONES</h2>
            <Link to='/yx1earphones'>
                <button className='px-7 py-3 bg-black hover:bg-gray text-white hover:text-white  text-sm font-semi font-font tracking-wide z-50 relative '>SEE PRODUCT</button>
            </Link>
        </div>

    </div>
  )
}

export default Earphone