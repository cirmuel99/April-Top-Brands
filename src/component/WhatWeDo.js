import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Heading, Text, Box, SimpleGrid } from '@chakra-ui/react';
import { PiLightbulbBold } from 'react-icons/pi'
import { FaPaintBrush } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import { HiOutlineSpeakerphone } from 'react-icons/hi'



const whatWeDo = () => {
    return (
        <div style={{ backgroundColor: 'whitesmoke'}}>
            <div className="whatWeDo" style={{width: '90%', margin: 'auto', paddingBottom: '6em', paddingTop: '5em'}}>

                <div>
                    <h6 className='wwa-h6'>WHAT WE DO</h6>
                    <h3 className='wwa-h3'>We are more than just <br />
                        a digital agency.</h3>
                </div>

                <div style={{display: 'flex', gap: '4em'}}>
                    <div style={{width: '40%'}}>
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

                    <SimpleGrid columns={2} spacing={30} style={{width: '60%', paddingTop: '2.3em'}} >
                        <Box className='wwd-box' bg='white' padding='50px 30px' borderRadius='6px'>
                            <PiLightbulbBold className='wwd-icons'/>
                            <Heading>Idea & Analysis</Heading>
                            <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consec tetur ipsum elit.</Text>
                        </Box>
                        <Box className='wwd-box' bg='white' padding='50px 30px' borderRadius='6px'>
                            <FaPaintBrush className='wwd-icons'/>
                            <Heading>Designing</Heading>
                            <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                        </Box>
                        <Box className='wwd-box' bg='white' padding='50px 30px' borderRadius='6px'>
                            <BsGraphUpArrow className='wwd-icons'/>
                            <Heading>Development</Heading>
                            <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                        </Box>
                        <Box className='wwd-box' bg='white' padding='50px 30px' borderRadius='6px'>
                            <HiOutlineSpeakerphone className='wwd-icons'/>
                            <Heading fontSize={'1.5rem'}>Online Marketing</Heading>
                            <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                        </Box> 
                    </SimpleGrid>
                    
                </div>

            </div>        
        </div>
    )
}

export default whatWeDo;