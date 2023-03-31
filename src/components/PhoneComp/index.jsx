import './styles.css'
import TxtBox from '../InputWithButton'
import Img1 from '../../assets/phone.png'
import Img2 from '../../assets/googleplay.jpg'
import Img3 from '../../assets/appstore.jpg'

import InputWithButton from '../InputWithButton'


const PhoneComp = ()=> {
    return (
        <section className='phoneArea'>
           <div className="left">
                <h1 className='title'>Make The Delicious Food and Order Our App</h1>
                <h4 className='subtitle' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit saepe id, maiores voluptate doloremque reprehenderit. Sapiente quis sit commodi neque officia reprehenderit perspiciatis explicabo consequuntur voluptatum eaque! Laboriosam, eligendi. </h4>
                <div className="links">
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                </div>
                
           </div>
           <div className="right">
            <img src={Img1} alt="" />
           </div>
        </section>
    )
}

export default PhoneComp