import imgMobile from '../../assets/home/mobile/image-header.jpg'
import imgTablet from '../../assets/home/tablet/image-header.jpg'
import imgDesktop from '../../assets/home/desktop/image-hero.jpg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='relative   m-auto '>
         <img src={imgMobile} alt="mobile" className='md:hidden' />
         <img src={imgTablet} alt="tablet" className='hidden md:flex xl:hidden' />
         <img src={imgDesktop} alt="desktop" className='hidden xl:flex' />

        <div className='flex flex-col absolute gap-6 text-center top-64 px-16 xl:text-left xl:w-[600px] xl:ml-24 '>
            <h6 className='text-3xl text-grey tracking-[12px]' >NEW PRODUCT</h6>
            <h1 className='text-6xl text-white font-font font-medium tracking-wide '>XX99 MARK II HEADPHONES</h1>
            <p className='text-greyLigth font-font text-xl'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

            <Link  > <button className='px-12 py-5 bg-orange hover:bg-orangeHover text-white text-xl font-font tracking-wide '>SEE PRODUCT</button> </Link>
        </div>

    </div>
  )
}

export default Header