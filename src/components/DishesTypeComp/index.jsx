import './styles.css'
import IMG1 from '../../assets/food1.png'
import IMG2 from '../../assets/food2.jpg'
import IMG3 from '../../assets/food3.jpg'
import IMG4 from '../../assets/food4.jpg'
import IMG5 from '../../assets/food5.png'
import IMG6 from '../../assets/food6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "stewed cobbage with sauce",
        price: "5,90€"
    },
    {
        id: 2,
        image: IMG2,
        title: "Puree soup with turkey pieces",
        price: "7,55€"
    },
    {
        id: 3,
        image: IMG3,
        title: "Chiken with vegetables",
        price: "3,39€"
    },
    {
        id: 4,
        image: IMG4,
        title: "Traditional Greek salad",
        price: "4,99€"
    },
    {
        id: 5,
        image: IMG5,
        title: "Three-Meat Special Lasagna",
        price: "5,10€"
    },
    {
        id: 6,
        image: IMG6,
        title: "Veggie Tagliatelle",
        price: "4,80€"
    }
] 

const DishesTypeComp = ()=> {
    return (
        <>
            <h1 className='title' >More than 20,000 Dishes to order!</h1>
            <h4 className='subtitle' >Most Delicious dishes from our chef Vítor Conceição</h4>
            <section>
                
                <div className="DishesTypeComp">
                  
                DishesTypeComp
                   
                </div>
                
            </section>
        </>
        
    )
}

export default DishesTypeComp