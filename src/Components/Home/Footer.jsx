import { Link } from 'react-router-dom'
import logo from '../../assets/shared/desktop/logo.svg'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import tw from '../../assets/shared/desktop/icon-twitter.svg'
import insta from '../../assets/shared/desktop/icon-instagram.svg'
const Footer = () => {
  return (
    <div className=' bg-black text-white pb-8 '>
        <div className='flex flex-col w-[327px]  md:w-[689px] lg:relative lg:w-full lg:max-w-[1100px] max-w-fit m-auto justify-center items-center lg:items-start gap-7 text-center'>
                <hr className='text-orange border-[2px] w-24 m-auto md:m-0 lg:block hidden' />
            <div className='flex flex-col gap-4 w-full lg:flex-row lg:justify-between '>
                <hr className='text-orange border-[2px] w-24 m-auto md:m-0 lg:hidden' />
                <img src={logo} alt="logo" className='w-32 m-auto md:m-0' />
                <ul className='flex flex-col items-center justify-center gap-6 text-xs md:text-[10px] tracking-[3px] md:flex-row  lg:w-full md:justify-start lg:justify-end'>
                    <li className='hover:text-orangeHover'>
                        <Link>HOME</Link>
                    </li>
                    <li className='hover:text-orangeHover'>
                        <Link>HEADPHONE</Link>
                    </li>
                    <li className='hover:text-orangeHover'>
                        <Link>SPEAKERS</Link>
                    </li>
                    <li className='hover:text-orangeHover'>
                        <Link>EARPHONES</Link>
                    </li>
                    
                </ul>
            </div>

            <p className='text-grey text-xs leading-relaxed md:text-left  lg:w-[420px] tracking-[1px] '>{`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}

            </p>
            <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:w-full '>
                <p className='text-grey text-xs '>Copyright 2021. All Rights Reserved</p>
                <div className='flex gap-4 lg:absolute lg:top-32 lg:right-0 '>
                    <img src={facebook} alt="facebook" className='w-4 h-4 cursor-pointer'/>
                    <img src={tw} alt="tw" className='w-4 h-4 cursor-pointer'/>
                    <img src={insta} alt="instagram" className='cursor-pointer w-4 h-4' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer