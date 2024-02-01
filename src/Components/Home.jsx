import Category from "./Home/Category"
import Header from "./Home/Header"
import Yx1Earphones from "./Products/Yx1Earphones"
import Zx7Speaker from "./Products/Zx7Speaker"
import Zx9Speaker from "./Products/Zx9Speaker"


const Home = () => {
  return (
    <>
        <Header/>
        <Category/>
        <Zx9Speaker/>
        <Zx7Speaker/>
        <Yx1Earphones/>
    </>
  )
}

export default Home