import imgMobile from '../../assets/home/mobile/image-speaker-zx9.png'
import imgTablet from '../../assets/home/tablet/image-speaker-zx9.png'
import imgDesktop from '../../assets/home/desktop/image-speaker-zx9.png'
import circles from '../../assets/home/desktop/pattern-circles.svg'
import { Link } from 'react-router-dom'

const Speaker9 = () => {
  return (
    <div className='w-[327px] h-[600px] md:w-[689px] md:h-[720px] lg:max-w-[1100px] lg:w-full lg:h-[560px]   bg-orange flex flex-col  lg:flex-row justify-center items-center gap-5  m-auto rounded-lg my-12 p-4 pb-12 lg:p-0 overflow-hidden' >
        <div className='relative w-full h-full  '>
            <img src={circles} alt="circles" className='absolute top-0 z-10 md:-top-12 lg:bottom-0 lg:top-8 lg:w-[2000px] lg:left-20' />
            <img src={imgMobile} alt="mobile" className='z-50 w-40 absolute top-14 left-20 md:hidden' />
            <img src={imgTablet} alt="tablet" className='hidden md:block absolute left-[40%] z-50 w-48 m-auto top-16 lg:hidden'/>
            <img src={imgDesktop} alt="desktop" className='hidden lg:block w-[410px] z-50 absolute left-24 -bottom-4' />
        </div>
        <div className='flex flex-col justify-center items-center gap-7 mx-10 text-center lg:text-left lg:items-start'>
            <h1 className='text-4xl mx-12 text-white font-font font-bold md:text-6xl md:mx-24 lg:mx-0'>ZX9 SPEAKER</h1>
            <p className='text-md text-textGrey md:mx-28 lg:mx-0'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to='/zx9speaker'><button className='px-9 py-4 bg-black hover:bg-orangeHover text-textGrey text-sm font-font tracking-wide z-50 relative '>SEE PRODUCT</button></Link>
        </div>
    </div>
  )
}

export default Speaker9