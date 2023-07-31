import { Heading, Text, Box, SimpleGrid } from '@chakra-ui/react';


const OurProject = () => {
    return (
        <div className="ourProject" style={{background: 'white'}}>
            <div style={{width: '90%', margin: 'auto', paddingBottom: '9em', paddingTop: '4.5em'}}>
                    <div>
                        <h6 className='wwa-h6'>Our Projects</h6>
                        <h3 className='wwa-h3'>Take A Look At Our <br/> Latest Projects</h3>
                    </div>
                        <SimpleGrid columns={2} spacing={40} style={{paddingTop: '2.3em'}} >
                            <Box className='op-box'>
                                <Box className="op-box-2">
                                    <Heading>Idea & Analysis</Heading>
                                    <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consec tetur ipsum elit.</Text>
                                </Box>
                            </Box>
                            <Box className='op-box'>
                                <Box className="op-box-2">
                                    <Heading>Designing</Heading>
                                    <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                                </Box>
                            </Box>
                            <Box className='op-box'>
                                <Box className="op-box-2">
                                    <Heading>Development</Heading>
                                    <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                                </Box>
                            </Box>
                            <Box className='op-box'>
                                <Box className="op-box-2">
                                    <Heading fontSize={'1.5rem'}>Online Marketing</Heading>
                                    <Text fontSize={'18px'}>Lorem ipsum dolor sit amet consectetur ipsum elit.</Text>
                                </Box>
                            </Box> 
                        </SimpleGrid>
            </div>
        </div>
    )
}

export default OurProject;