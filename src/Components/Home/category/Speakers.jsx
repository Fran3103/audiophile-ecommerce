import { Link } from "react-router-dom"
import Category from "../Category"
import BestGear from "../BestGear"

import zx9Desktop from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9Tablet from '../../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Mobile from '../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'

import zx7Desktop from '../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7Tablet from '../../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Mobile from '../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'


const Speakers = () => {
  return (
    <div className="mt-16 max-w-[1100xp]  m-auto flex flex-col justify-center ">
        
            <h1 className="text-center bg-black p-8 text-3xl text-white font-medium tracking-[2px]">SPEAKERS</h1>
        <div className="w-full max-w-[1100px] m-auto">
                
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
                <img src={zx9Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={zx9Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={zx9Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h3 className="text-orange tracking-[10px]">NEW PRODUCT </h3>
                    <h2 className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">ZX9 speaker</h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <Link to='/zx9speaker' > <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px] '>SEE PRODUCT</button> </Link>
                </div>
            </div>
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
            <img src={zx7Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={zx7Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={zx7Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]"/>
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h2  className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">ZX7 SPEAKER </h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <Link to='/zx7speaker' > <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
            </div>
          
        </div>
         <Category/>
         <BestGear/>
    </div>
  )
}

export default Speakers