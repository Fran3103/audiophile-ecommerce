import { Link } from 'react-router-dom'
import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '../assets/shared/desktop/icon-arrow-right.svg'

const Menu = (activar) => {
  return (
    <div className='w-screem h-screen bg-greyTransparent'>
            <div className='flex flex-col gap-2  items-center mb-12 md:flex-row md:justify-around md:p-12 lg:hidden   w-screen bg-white '>
            <div className='flex flex-col justify-center items-center w-[327px] h-[145px]  bg-greyLight rounded py-3 mt-20  h-34 md:w-56 lg:w-[300px] lg:h-[200px] xl:w-[350px] xl:h-[200px]'>
                <img src={headphones} alt="herdphones" className='w-36 -mt-20 md:-mt-32 md:w-44 lg:w-56' />
                <h2 className='text-black font-font font-bold md:-mt-5'>HEADPHONES</h2>
                <Link to='/headphones' className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3' onClick={activar}> 
                        <h3 className='text-xs' >shop</h3>
                        <img src={arrow} alt="arrow" className='w-2 h-3' />
                </Link>
        
            </div>

            <div className='flex flex-col justify-center items-center w-[327px] h-[145px]   bg-greyLight rounded py-3 mt-20  h-34 md:w-56 lg:w-[300px] lg:h-[200px] xl:w-[350px] xl:h-[200px]'>
                <img src={speakers} alt="speakers"  className='w-36 -mt-20 md:w-44 lg:w-56'/>
                <h2 className='text-black font-font font-bold md:-mt-5'>SPEAKERS</h2>
                <Link to='/speakers' className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3' onClick={activar}> 
                        <h3 className='text-xs'>shops</h3>
                        <img src={arrow} alt="arrow" />
                </Link>
        
            </div>

            <div className='flex flex-col justify-center items-center w-[327px] h-[145px]  mb-4 bg-greyLight rounded py-3 mt-20  h-34 md:w-56 lg:w-[300px] lg:h-[200px] xl:w-[350px] xl:h-[200px]'>
                <img src={earphones} alt="earphones" className='w-36 -mt-20 md:w-44 lg:w-56' />
                <h2 className='text-black font-font font-bold md:-mt-5'   >EARPHONES</h2>
                <Link to='/earphones' className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3' onClick={activar}> 
                        <h3 className='text-xs'>shops</h3>
                        <img src={arrow} alt="arrow" />
                </Link>
        
            </div>
            
        </div>
    </div>
  )
}

export default Menu