
import { Link } from "react-router-dom"
import Category from "../Category"
import BestGear from "../BestGear"

import zx9Desktop from '../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import zx9Tablet from '../../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import zx9Mobile from '../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'



const Earphones = () => {
  return (
    <div className="mt-16 max-w-[1100xp]  m-auto flex flex-col justify-center ">
        
            <h1 className="text-center bg-black p-8 text-3xl text-white font-medium tracking-[2px]">EARPHONES</h1>
        <div className="w-full max-w-[1100px] m-auto">
                
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
                <img src={zx9Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={zx9Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={zx9Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h3 className="text-orange tracking-[10px]">NEW PRODUCT </h3>
                    <h2 className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">YX1 WIRELESS EARPHONES</h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <Link  to='/yx1earphones'> <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px] '>SEE PRODUCT</button> </Link>
                </div>
            </div>
           
          
        </div>
         <Category/>
         <BestGear/>
    </div>
  )
}

export default Earphones