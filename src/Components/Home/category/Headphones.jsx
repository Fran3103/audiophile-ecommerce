import { Link } from "react-router-dom"
import Mark2Desktop from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import Mark2Tablet from '../../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import Mark2Mobile from '../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'

import Mark1Desktop from '../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import Mark1Tablet from '../../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import Mark1Mobile from '../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'

import XX59Desktop from '../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import XX59Tablet from '../../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import XX59Mobile from '../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import Category from "../Category"
import BestGear from "../BestGear"

const Headphones = () => {
  return (
    <div className="mt-16 max-w-[1100xp] w-screen m-auto flex flex-col justify-center ">
        
            <h1 className="text-center bg-black p-8 text-3xl text-white font-medium tracking-[2px]">HEADPHONES</h1>
        <div className="w-full max-w-[1100px] m-auto">
                
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
                <img src={Mark2Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={Mark2Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={Mark2Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h3 className="text-orange tracking-[10px]">NEW PRODUCT </h3>
                    <h2 className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">XX99 Mark II Headphones</h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <Link  to='/xx99Mark2'> <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px] '>SEE PRODUCT</button> </Link>
                </div>
            </div>
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
            <img src={Mark1Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={Mark1Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={Mark1Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]"/>
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h2  className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">XX99 Mark I Headphones </h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <Link  to='/xx99Mark1' > <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
            </div>
            <div className="px-6 my-12 flex flex-col w-full lg:flex-row m-auto lg:gap-20   mt-20">
            <img src={XX59Desktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                <img src={XX59Tablet} alt="imagen de producto"  className="hidden md:block lg:hidden rounded-xl"/>
                <img src={XX59Mobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />
                <div className="text-center flex flex-col justify-center items-center gap-4 mt-3 lg:items-start  ">
                    <h2  className="text-3xl mx-12 uppercase font-bold md:text-5xl md:mx-24 lg:mx-0 lg:text-left">XX59 Headphones</h2>
                    <p className="text-[12px] mx-9 md:text-lg lg:text-left lg:mx-0 ">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <Link  to='/xx59' > <button className='px-6 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
            </div>
        </div>
         <Category/>
         <BestGear/>
    </div>
  )
}

export default Headphones