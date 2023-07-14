import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const whatWeDo = () => {
    return (
        <div className="whatWeDo">
            <div style={{width: '90%', margin: 'auto', paddingBottom: '6em'}}>
                <div>
                    <h6 className='wwa-h6'>Who We Are</h6>
                    <h3 className='wwa-h3'>What We Offer To Highest <br/>Quality Service</h3>
                </div>
                
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
                    
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            ))}
                        </Row>

            </div>
        </div>
    )
}

export default whatWeDo;





  
