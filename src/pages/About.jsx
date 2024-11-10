import { Box, Avatar, Heading, Text, Link, Button, Icon } from '@chakra-ui/react';
import PHOTO1 from '../../public/PHOTO1.png';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    return (
        <Box
            maxW={{ base: "90%", md: "600px" }} // Responsive max width
            mx="auto"
            my={20}
            p={6}
            borderRadius="0px"
            boxShadow="lg"
            bg="gray.700"
        >
            <Box display={{ base: 'block', md: 'flex' }} flexDirection='row' justifyContent='center' alignItems='center'>
                <Box mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 10 }}>
                    <Avatar
                        name="Ajay Kandhare"
                        src={PHOTO1} // Replace with your image URL
                        boxSize="170px" // Set the size of the avatar
                        borderRadius="0px" // Set to 'md' for square edges4
                        boxShadow="dark-lg"
                    />
                </Box>
                <Box>
                    <Heading as="h2" size="xl" fontFamily="heading">Ajay Kandhare</Heading>
                    <Text fontSize="lg" fontFamily="body" fontWeight="bold">Web Developer</Text>
                    <Text fontFamily="body">Pune, Maharashtra, India</Text>
                    <Text fontFamily="body" color='teal.200'>
                        <Link
                            href="mailto:ajaykandhare12@gmail.com"
                            color="teal.200"
                            fontWeight="bold"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            ajaykandhare12@gmail.com
                        </Link>
                    </Text>
                    <Text fontFamily="body"><span style={{ fontWeight: 'bold' }}>+91 75593 94187</span></Text>
                    <Text fontFamily="body">
                        <Link
                            href="https://ajay-kandhare.vercel.app"
                            target='_blank'
                            color="teal.200"
                            fontWeight="bold"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            ajay-kandhare.vercel.app
                        </Link>
                    </Text>
                </Box>
            </Box>

            <Heading as="h3" size="lg" mt={6} fontFamily="heading">About Me</Heading>
            <Text mt={2} fontFamily="body">
                Web Developer with a strong foundation in <span style={{ fontWeight: 'bold' }}>React</span>, <span style={{ fontWeight: 'bold' }}>Chakra UI</span>, and <span style={{ fontWeight: 'bold' }}>Material UI</span>.
                I am passionate about creating secure, responsive, and user-friendly web applications
                and enjoy leveraging modern technologies to address cybersecurity challenges.
                Skilled in <span style={{ fontWeight: 'bold' }}>JavaScript</span>, <span style={{ fontWeight: 'bold' }}>TypeScript</span>, <span style={{ fontWeight: 'bold' }}>Node.js</span>, and frontend frameworks,
                with a focus on <span style={{ fontWeight: 'bold' }}>problem-solving</span> and <span style={{ fontWeight: 'bold' }}>adaptability</span>.
            </Text>
            <Button
                onClick={() => navigate(-1)} // Navigate back to the previous page
                colorScheme="teal" // Change color scheme as needed
                variant="outline" // Change variant as needed
                leftIcon={<Icon name="arrow-back" />} // Optionally add an icon
                mt={5}
                _hover={{ bg: "teal.900" }}
            >
                Back
            </Button>
        </Box>
    );
}

export default About;
