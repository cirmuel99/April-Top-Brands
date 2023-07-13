import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className="Banner" style={{background: '#2727ad', height: 'auto'}}>
            <div className="banner-content">
                <h2 style={{color: '#db3030'}}>April Top Brand.</h2>
                <h1 className="banner-h1">We bring inspiration and innovation <br />to every of our clients <br /> business.</h1>
                <Link to='/about' className="read-more-link">Read More <BsArrowRight style={{marginLeft: '10px'}} /> </Link>
            </div>
        </div>
    )
}

export default Banner;