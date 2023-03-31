import DishesComp from '../components/DishesComp'
import FooterComp from '../components/Footer'
import HomeComp from '../components/HomeComp'
import PhoneComp from '../components/PhoneComp'



export function Home(){
    return (
        <>
            <HomeComp />
            <DishesComp />
            <PhoneComp />
            <FooterComp />
        </>
        
    )
}