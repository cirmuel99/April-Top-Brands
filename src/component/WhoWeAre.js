import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const WhoWeAre = () => {
    return (
        <div className="whoWeAre">
            <div style={{width: '90%', margin: 'auto', display: 'flex', gap: '4em'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                    <h6 wwa-h6>Who We Are</h6>
                    <h3 wwa-h3>What We Offer To Highest <br/>Quality Service</h3>
                    <div style={{height: '380px', background: 'black'}}></div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column',  width:'50%'}}>
                    <h5 wwa-h5>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in 
                        ligula. Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.
                    </h5>
                    <p className='wwa-p'>
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                        Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
                    </p>
                    <p className='wwa-p'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                        Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.</p>
                    <Link to='/about' className="read-more-link">Read More 
                        <BsArrowRight style={{marginLeft: '10px'}} /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;