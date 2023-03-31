import './styles.css'
import Img1 from '../../assets/deliveryman.jpg'


const AboutComp = ()=> {
    return (
        <section className='AboutComp' >
            <h1 className="title" >Best Delivery System</h1>
           
            <img src={Img1} alt="" />
            <div className="text">
            <h4 className='subtitle' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repellendus reprehenderit eveniet mollitia pariatur neque, ex distinctio temporibus iste obcaecati soluta dolores aspernatur suscipit eius et commodi rerum voluptas vero!</h4>
            </div>
            
        </section>
    )
}

export default AboutComp