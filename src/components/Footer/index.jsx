import './styles.css'
import TxtBox from '../InputWithButton'
import Img1 from '../../assets/deliveryman.jpg'
import InputWithButton from '../InputWithButton'


const FooterComp = ()=> {
    return (
        <footer className='footerArea'>
           <div className="left">
                <h1 className='title'  ></h1>
                <h4 className='subtitle' >  </h4>
                <InputWithButton />
           </div>
           <div className="right">
            <h1 className='title' >Ready to order?</h1>
            <button className='btn' >Order Now</button>
           </div>
        </footer>
    )
}

export default FooterComp