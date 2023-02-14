import './styles.css'
import TxtBox from '../InputWithButton'
import Img1 from '../../assets/deliveryman.jpg'


const HomeComp = ()=> {
    return (
        <section>
            <div className="HomeComp">
                <div className="info">
                    <div className="text">
                    <h1>We Provide Delivery within 30min</h1>
                    <h4>Imagine you dont need a diet because we provide healthy and delicious food for you!</h4>
                    </div>
                    
                    <TxtBox />
                </div>
                <div className="img">
                    <img src={Img1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HomeComp