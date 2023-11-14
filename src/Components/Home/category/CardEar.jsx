import { Link } from 'react-router-dom'
import img from '../../../assets/cart/image-yx1-earphones.jpg'
import arrow from '../../../assets/shared/desktop/icon-arrow-rigth.svg'

const CardEar = () => {
  return (
    <div>
        <img src={img} alt="img" />
        <h2>HEADPHONES</h2>
       <Link> 
            <h4>shops</h4>
            <img src={arrow} alt="row" /> 
       </Link>
       
    </div>
  )
}

export default CardEar