import DishesComp from '../components/DishesComp'
import HomeComp from '../components/HomeComp'
import DishesTypeComp from '../components/DishesTypeComp'

export function Home(){
    return (
        <>
            <HomeComp />
            <DishesTypeComp />
            <DishesComp />
        </>
        
    )
}