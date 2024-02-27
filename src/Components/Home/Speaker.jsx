
import imgMobile from '../../assets/home/mobile/image-speaker-zx7.jpg'
import imgTablet from '../../assets/home/tablet/image-speaker-zx7.jpg'
import imgDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Speaker = () => {
    useEffect(() => {
        // Al cargar la página, desplazar hacia arriba
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className=' w-[327px]  md:w-[689px] lg:w-full lg:max-w-[1100px] bg-orange  relative m-auto rounded-lg mb-12'>
        <div className='flex flex-col items-start  gap-6 absolute top-24 left-9'>
            <h2 className='text-3xl font-semibold'>ZX7 SPEAKER</h2>
            <Link to='/zx7speaker'>
                <button className='px-7 py-3 bg-transparent hover:bg-black text-black hover:text-white border-[2px] text-sm font-semibold font-font tracking-wide z-50 relative '>SEE PRODUCT</button>
            </Link>
        </div>
        <div>
            <img src={imgMobile} alt="mobile" className='rounded-lg md:hidden w-full'/>
            <img src={imgTablet} alt="tablet" className='hidden md:block lg:hidden rounded-lg w-full' />
            <img src={imgDesktop} alt="desktop" className='hidden lg:block rounded-lg w-full' />

        </div>
    </div>
  )
}

export default Speaker