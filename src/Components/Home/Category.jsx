import { Link } from 'react-router-dom'
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg'


const Category = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col justify-center items-center w-3/4  bg-greyLight rounded py-3 mt-20 h-48'>
            <img src={headphones} alt="herdphones" className='w-40 -mt-24' />
            <h2 className='text-black font-font font-bold'>HEADPHONES</h2>
            <Link className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3'> 
                    <h4 >shop</h4>
                    <img src={arrow} alt="arrow" className='w-2 h-3' />
            </Link>
       
        </div>

        <div className='flex flex-col justify-center items-center w-3/4  bg-greyLight rounded py-3 mt-20 h-48'>
            <img src={speakers} alt="speakers"  className='w-40 -mt-24'/>
            <h2 className='text-black font-font font-bold'>SPEAKERS</h2>
            <Link className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3'> 
                    <h4>shops</h4>
                    <img src={arrow} alt="arrow" />
            </Link>
       
        </div>

        <div className='flex flex-col justify-center items-center w-3/4  bg-greyLight rounded py-3 mt-20 h-48'>
            <img src={earphones} alt="earphones"  className='w-40 -mt-24' />
            <h2 className='text-black font-font font-bold'>EARPHONES</h2>
            <Link className='flex gap-4 justify-center items-center text-grey font-font font-bold uppercase mt-3'> 
                    <h4>shops</h4>
                    <img src={arrow} alt="arrow" />
            </Link>
       
        </div>
        
    </div>
  )
}

export default Category