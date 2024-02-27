import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import Category from "../../Components/Home/Category"
import BestGear from "../../Components/Home/BestGear"

import productDesktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import productTablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import productMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'

import gallery1Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import gallery1Tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import gallery1Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'

import gallery2Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import gallery2Tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import gallery2Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'

import gallery3Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import gallery3Tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import gallery3Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'




import zx9Desktop from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9Tablet from '../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Mobile from '../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'

import Mark1Desktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import Mark1Tablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import Mark1Mobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'

import XX59Desktop from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import XX59Tablet from '../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import XX59Mobile from '../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import PropTypes from 'prop-types';

const XX99Mark2 = ({setProductos, productos}) => {

    const [item, setItem] = useState(0)

    const sumar = () => setItem(item +1)
    const restar = ()=> { 
    if(item > 0){ setItem(item -1)
    }}

    const producto = {
        'precio': 2999,
        'titulo':'XX99 MK II ',
        'cantidad':item,
        'img':productMobile

}

const añadir = () => {
    // Verificar si el producto ya está en la lista
   if(producto.cantidad > 0){ 
    const productoExistente = productos.find(item => item.titulo === producto.titulo);

    // Si el producto ya está en la lista, actualizar la cantidad
    if (productoExistente) {
        const nuevaLista = productos.map(item =>
            item.titulo === productoExistente.titulo
                ? { ...item, cantidad: item.cantidad + producto.cantidad }
                : item
        );
        setProductos(nuevaLista);
    }  
        // Si el producto no está en la lista, agregarlo
    else {
    setProductos([...productos, producto]);}
    }
};

useEffect(() => {
    // Al cargar la página, desplazar hacia arriba
    window.scrollTo(0, 0);
}, []);


  return (
    <div className="mt-16 max-w-[1100xp]   m-auto flex flex-col justify-center ">
        
        <div className="w-full max-w-[1100px] m-auto">
           <Link to='/headphones' ><p className="pt-12 pl-6">Go Back</p></Link>
                
            <div className="px-6 mb-12 flex flex-col w-full mt-4">
                <div className="w-full md:flex gap-6 ">
                    <img src={productDesktop} alt="imagen de producto" className=" md:hidden  rounded-xl " />
                    <img src={productTablet} alt="imagen de producto"  className="hidden md:block max-w-[281px] lg:hidden rounded-xl"/>
                    <img src={productMobile} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[540px]" />

                    <div className="text-left flex flex-col justify-center items-start gap-4 mt-3 lg:items-start  ">
                        <h3 className="text-orange tracking-[10px]">NEW PRODUCT </h3>
                        <h2 className="text-3xl uppercase font-bold md:text-5xl  lg:mx-0 lg:text-left">XX99 Mark Headphones II</h2>
                        <p className="text-base  md:text-lg lg:text-left lg:mx-0 ">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

                        <p className="font-bold">$ {producto.precio}</p>
                        <div className="flex items-center justify-start gap-4 w-full h-12">
                            <div className="flex items-center justify-around w-28 h-full bg-greyLight  ">
                                <button className="text-grey text-xs font-bold" onClick={restar}>-</button>
                                <p className="font-bold">{item}</p>
                                <button className="text-grey text-xs font-bold" onClick={sumar}>+</button >
                            </div>
                            <button className='px-6 h-full bg-orange hover:bg-orangeHover font-bold text-white text-xs font-font tracking-[2px] ' onClick={añadir}>ADD TO CART</button>
                        </div>
                </div>
                </div>
                <div className="my-12 lg:flex w-full gap-12 lg:mb-24">
                    <div className="flex flex-col justify-center items-start gap-3 lg:w-[60%] ">
                        <h3 className="text-xl font-bold">FEATURES</h3>
                        <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br /><br />
                        
                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-4 mt-12 md:flex-row lg:flex-col  lg:justify-start lg:items-start lg:w-[40%] lg:mt-0">
                        <h3 className="uppercase text-xl font-bold w-[50%] ">in the box</h3>
                        <div className="flex flex-col gap-2 ">
                            <p><span className="text-orange font-bold mr-3">1x</span>Headphone Unit</p>
                            <p><span className="text-orange font-bold mr-3">2x</span>Replacement Earcups</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>User Manual</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>3.5mm 5m Audio Cable</p>
                            <p><span className="text-orange font-bold mr-3">1x</span>Travel Bag </p>
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
              
                <div className="text-center flex flex-col justify-center items-center gap-2 mt-3  w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                    <img src={Mark1Mobile} alt="imagen de producto" className=" md:hidden  rounded-xl  h-[120px]  w-[300px]" />
                    <img src={Mark1Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[218px] "/>
                    <img src={Mark1Desktop} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[350px]"/>
                        <h2  className="text-base  uppercase font-bold ">XX99 Mark I Headphones </h2>
                        
                        <Link  to='/xx99Mark1' > <button className='px-4 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
                
                
                <div className="text-center flex flex-col justify-center items-center gap-2 mt-3 w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                    <img src={XX59Mobile} alt="imagen de producto" className=" md:hidden  rounded-xl  h-[120px]  w-[300px]" />
                    <img src={XX59Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[218px]  "/>
                    <img src={XX59Desktop} alt="imagen de producto" className="hidden lg:block rounded-xl max-w-[350px]" />
                        <h2  className="text-base  uppercase font-bold ">XX59 Headphones</h2>
                         
                        <Link  to='/xx59' > <button className='px-4 py-2 bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px]  '>SEE PRODUCT</button> </Link>
                </div>
                <div className="text-center flex flex-col justify-center items-center gap-2 mt-3  w-full  md:w-[223px] md:h-[471px] lg:w-[350px] ">
                        <img src={zx9Mobile} alt="imagen de producto" className=" md:hidden  rounded-lg  h-[120px]  w-[300px]" />
                        <img src={zx9Tablet} alt="imagen de producto"  className="hidden md:flex lg:hidden rounded-lg h-[218px] "/>
                        <img src={zx9Desktop} alt="imagen de producto" className="hidden lg:block rounded-lg max-w-[350px]" />
                    
                        <h2 className="text-base  uppercase font-bold ">zx9 speaker</h2>
                        
                        <Link  to='/zx9speaker'> <button className='px-4 py-2  bg-orange hover:bg-orangeHover text-white text-[10px] font-font tracking-[2px] '>SEE PRODUCT</button> </Link>
                </div>
            </div>
        </div>
         <Category/>
         <BestGear/>
    </div>
  )
}

XX99Mark2.propTypes = {
    setProductos: PropTypes.func.isRequired,
    productos: PropTypes.array.isRequired,
  }

export default XX99Mark2