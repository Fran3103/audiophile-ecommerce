import imgMobile from '../../assets/home/mobile/image-header.jpg'
import imgTablet from '../../assets/home/tablet/image-header.jpg'
import imgDesktop from '../../assets/home/desktop/image-hero.jpg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='w-screen relative m-auto '>
        <img src={imgDesktop} alt="desktop" className='hidden lg:flex w-full max-w-[1600px] m-auto' />
        <div className=' m-auto max-w-[1100px]  w-full h-full lg:pl-5 '>
            <div className='  m-auto  '>
                <img src={imgMobile} alt="mobile" className='md:hidden' />
                <img src={imgTablet} alt="tablet" className='hidden md:flex lg:hidden' />

                <div className='flex flex-col justify-center items-center m-auto absolute gap-6 text-center top-40 p-3   lg:w-full lg:left-44 lg:text-left lg:hidden  lg:top-48 max-w-[1100px]'>
                    <h6 className='text-md text-grey tracking-[12px]' >NEW PRODUCT</h6>
                    <h1 className='text-4xl mx-5 lg:ml-0 lg:mr-[400px] text-white font-font font-medium tracking-wide md:mx-8 md:text-6xl '>XX99 MARK II HEADPHONES</h1>
                    <p className='text-greyLigth font-font text-md text-white md:mx-44 lg:ml-0 lg:mr-[750px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <Link  > <button className='px-8 py-3 bg-orange hover:bg-orangeHover text-white text-md font-font tracking-wide '>SEE PRODUCT</button> </Link>
                </div>

            </div>
            <div className='hidden  lg:flex flex-col justify-start items-start  m-auto  gap-6  p-3  top-[27%] w-full absolute text-left   max-w-[1100px]'>
                    <h6 className='text-md text-grey tracking-[12px]' >NEW PRODUCT</h6>
                    <h1 className='text-4xl mx-5 lg:ml-0 lg:mr-[400px] text-white font-font font-medium tracking-wide md:mx-8 md:text-6xl '>XX99 MARK II HEADPHONES</h1>
                    <p className='text-greyLigth font-font text-md text-white md:mx-44 lg:ml-0 lg:mr-[750px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <Link  > <button className='px-8 py-3 bg-orange hover:bg-orangeHover text-white text-md font-font tracking-wide '>SEE PRODUCT</button> </Link>
            </div>
        </div>
    </div>
  )
}

export default Header