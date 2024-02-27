import imgMobile from '../../assets/shared/mobile/image-best-gear.jpg'
import imgTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import imgDesktop from '../../assets/shared/desktop/image-best-gear.jpg'
import { useEffect } from 'react';

const BestGear = () => {
    useEffect(() => {
        // Al cargar la página, desplazar hacia arriba
        window.scrollTo(0, 0);
    }, []);
  return (

    <div className='mb-12'>
        <div className='flex flex-col w-[327px]  md:w-[689px] lg:w-full lg:max-w-[1100px] lg:flex-row-reverse justify-center items-center m-auto gap-3'>
            <img src={imgMobile} alt="img persona" className=' md:hidden rounded-lg mb-4 ' />
            <img src={imgTablet} alt="img persona" className='hidden md:block lg:hidden rounded-lg mb-4' />
            <img src={imgDesktop} alt="img persona" className='hidden lg:block rounded-lg mb-4' />
            <div className='flex flex-col  text-center lg:text-left lg:mr-32 gap-6'>
                <h3 className='text-3xl uppercase font-semibold lg:text-4xl '>
                    Bringing you the  <span className='text-orange'>best </span> audio gear 
                </h3>
                <p className='mx-1   '>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BestGear