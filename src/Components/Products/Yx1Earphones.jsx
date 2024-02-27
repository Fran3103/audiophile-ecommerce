
import { useState } from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import Category from "../../Components/Home/Category"
import BestGear from "../../Components/Home/BestGear"

import productDesktop from '../../assets/product-yx1-earphones/desktop/image-product.jpg'
import productTablet from '../../assets/product-yx1-earphones/tablet/image-product.jpg'
import productMobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg'

import gallery1Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import gallery1Tablet from '../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg'
import gallery1Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'

import gallery2Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import gallery2Tablet from '../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg'
import gallery2Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'

import gallery3Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import gallery3Tablet from '../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg'
import gallery3Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'




import zx7Desktop from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7Tablet from '../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Mobile from '../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'

import Mark1Desktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import Mark1Tablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import Mark1Mobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'

import mark2Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import mark2Tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import mark2Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'

const  Yx1Earphones = () => {

    const [item, setItem] = useState(0)

    const sumar = () => setItem(item +1)
    const restar = ()=> { 
    if(item > 0){ setItem(item -1)
    }}



  return (
    <div className="mt-16 max-w-[1100xp]  m-auto flex flex-col justify-center ">
        
        <div className="w-full max-w-[1100px] m-auto">
           <Link to='/earphones' ><p className="pt-12 pl-6">Go Back</p></Link>
                
            <div className="px-6 mb-12 flex flex-col w-full mt-4">
                <div className="w-full md:flex gap-6 ">
                    <img src={productDesktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                    <img src={productTablet} alt="imagen de producto"  className="hidden md:block max-w-[281px] lg:hidden rounded-xl"/>
                    <img src={productMobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />

                    <div className="text-left flex flex-col justify-center items-start gap-4 mt-3 lg:items-start  ">
                        <h3 className="text-orange tracking-[10px]">NEW PRODUCT </h3>
                        <h2 className="text-3xl uppercase font-bold md:text-5xl  lg:mx-0 lg:text-left">YX1 WIRELESS EARPHONES</h2>
                        <p className="text-base  md:text-lg lg:text-left lg:mx-0 ">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>

                        <p className="font-bold">$ 599</p>
                        <div className="flex items-center justify-start gap-4 w-full h-12">
                            <div className="flex items-center justify-around w-28 h-full bg-greyLight  ">
                                <button className="text-grey text-xs font-bold" onClick={restar}>-</button>
                                <p className="font-bold">{item}</p>
                                <button className="text-grey text-xs font-bold" onClick={sumar}>+</button >
                            </div>
                            <button className='px-6 h-full bg-orange hover:bg-orangeHover font-bold text-white text-xs font-font tracking-[2px] '>ADD TO CART</button>
                        </div>
                </div>
                </div>
                <div className="my-12 lg:flex w-full gap-12 lg:mb-24">
                    <div className="flex flex-col justify-center items-start gap-3 lg:w-[60%] ">
                        <h3 className="text-xl font-bold">FEATURES</h3>
                        <p>Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                        <br /><br />    
                        The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-4 mt-12 md:flex-row lg:flex-col  lg:justify-start lg:items-start lg:w-[40%] lg:mt-0">
                        <h3 className="uppercase text-xl font-bold w-[50%] ">in the box</h3>
                        <div className="flex flex-col gap-2 ">
                            <p><span className="text-orange font-bold mr-3">2x</span>Earphone Unit</p>
                            <p><span className="text-orange font-bold mr-3">6x</span>Multi-size Earplugs</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>User Manual</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>USB-C Charging Cable</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>Travel Pouch</p>
                           
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-4 w-full gap-4 md:hidden">
                    <img className="row-start-1 row-end-2 rounded-lg " src={gallery1Mobile} alt="gallery image" />
                    <img className="row-start-2 row-end-3 rounded-lg " src={gallery2Mobile} alt="gallery image" />
                    <img className="row-start-3 row-end-6 rounded-lg " src={gallery3Mobile} alt="gallery image" />
                </div>
                <div className=" grid-rows-2 grid-cols-3 w-full gap-2 hidden md:grid lg:hidden ">
                    <img className="row-start-1 row-end-2 col-start-1 col-end-2 rounded-lg h-full " src={gallery1Tablet} alt="gallery image" />
                    <img className="row-start-2 row-end-3  col-start-1 col-end-2 rounded-lg h-full " src={gallery2Tablet} alt="gallery image" />
                    <img className="row-start-1 row-end-3  col-start-2 col-end-4 rounded-lg " src={gallery3Tablet} alt="gallery image" />
                </div>
                <div className="lg:flex gap-8  hidden h-[562px]  justify-between ">
                    <div className="flex flex-col justify-between h-full">
                        <img className="rounded-lg" src={gallery1Desktop} alt="gallery image" />
                        <img className="rounded-lg" src={gallery2Desktop} alt="gallery image" />
                    </div>
                    <img className="rounded-lg h-full" src={gallery3Desktop} alt="gallery image" />
                </div>
            </div>

          
        </div>
        <div>
            <h4 className="uppercase text-center font-bold text-2xl">you may also like</h4>
            <div className="w-full max-w-[1100px] m-auto px-4 flex flex-col my-12 gap-6 mb-20 md:flex-row md:px-3 md:gap-4 md:justify-center lg:justify-between">
                <div className="text-center flex flex-col justify-center gap-2 mt-3  w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                        <img src={zx7Mobile} alt="imagen de producto" className=" md:hidden  rounded-lg  h-[120px]  w-full" />
                        <img src={zx7Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[318px] "/>
                        <img src={zx7Desktop} alt="imagen de producto" className="hidden lg:block rounded-lg max-w-[350px]" />
                    
                        <h2 className="text-base  uppercase font-bold ">zx7 speaker</h2>
                        
                        <Link  to='/zx7speaker'> <button className='px-4 py-2  bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px] '>SEE PRODUCT</button> </Link>
                </div>
                <div className="text-center flex flex-col justify-center items-center gap-2 mt-3  w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                    <img src={Mark1Mobile} alt="imagen de producto" className=" md:hidden  rounded-xl  h-[120px]  w-full" />
                    <img src={Mark1Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[318px] "/>
                    <img src={Mark1Desktop} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[350px]"/>
                        <h2  className="text-base  uppercase font-bold ">XX99 Mark I  </h2>
                        
                        <Link  to='/xx99Mark1' > <button className='px-4 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
                
                
                <div className="text-center flex flex-col justify-center items-center gap-2 mt-3 w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                    <img src={mark2Mobile} alt="imagen de producto" className=" md:hidden  rounded-xl  h-[120px]  w-full" />
                    <img src={mark2Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[318px] "/>
                    <img src={mark2Desktop} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[350px]" />
                        <h2  className="text-base  uppercase font-bold ">xx99 Mark II</h2>
        
                        <Link  to='/xx59' > <button className='px-4 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
                
            </div>
        </div>
         <Category/>
         <BestGear/>
    </div>
  )
}
Yx1Earphones.propTypes = {
    setProductos: PropTypes.func.isRequired,
    productos: PropTypes.array.isRequired,
  }
export default Yx1Earphones