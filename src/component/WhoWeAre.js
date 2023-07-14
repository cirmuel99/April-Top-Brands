import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const WhoWeAre = () => {
    return (
        <div className="whoWeAre">
            <div style={{width: '90%', margin: 'auto', paddingBottom: '6em'}}>
                <div>
                    <h6 className='wwa-h6'>Who We Are</h6>
                    <h3 className='wwa-h3'>What We Offer To Highest <br/>Quality Service</h3>
                </div>
                <div style={{display: 'flex', gap: '4.2em'}}>
                    <div style={{height: '540px', background: '#817166', width: '40%', borderRadius: '10px'}}></div>
                    <div style={{display: 'flex', flexDirection: 'column',  width:'60%', paddingTop: '2.4em'}}>
                            <h5 className='wwa-h5'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in 
                                ligula. Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.
                            </h5>
                            <p className='wwa-p1'>
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
                            </p>
                            <p className='wwa-p'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.</p>
                            <Link to='/about' className="read-more-link" style={{width: '108px'}}>Read More 
                                <BsArrowRight style={{marginLeft: '10px'}} /> 
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;