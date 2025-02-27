import { Box, Grid, Text, Link, useBreakpointValue, Heading, Button } from '@chakra-ui/react';
import PHOTO1 from '../../public/resume_photo.jpg';
import { motion } from 'framer-motion';
import CV from '../../public/CV.pdf'
import { TypeAnimation } from 'react-type-animation';
import "@darenft/react-3d-hover-card/dist/style.css";
import HoverCard from "@darenft/react-3d-hover-card";

const Introduction = () => {
    const textAlign = useBreakpointValue({ base: 'center', md: 'left' }); // Adjust text alignment based on screen size
    const imageSize = useBreakpointValue({ base: '200px', md: '400px' }); // Adjust image size for small screens

    const foggyLeftToRight = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const foggyRightToLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <Box p={{ base: 4, lg: "60px 50px 100px 50px", md: "30px 15px 50px 15px" }}
            m={{ base: 4, lg: "0px 50px", md: "30px 15px 50px 15px" }}
            bg={{ base: 0, md: "gray.700" }} border={{ base: 0, md: "1px solid #ffffff29" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={{ base: 0, md: "dark-lg" }}
            overflow="hidden"
        >
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={{ base: 4, md: 8 }}
                alignItems="start"
            >
                {/* Left Side - Introduction Text */}
                <Box>
                    <motion.div
                        variants={foggyLeftToRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1.05 }}
                        viewport={{ once: true }}
                    >
                        <Box textAlign={textAlign}>
                            <Heading
                                as="h1"
                                size="xl"
                                fontWeight="bold"
                                color="gray.300"
                                textAlign={{ base: "center", md: "start" }}
                                letterSpacing="wide"
                            >
                                <Box Box as="span" bgGradient="linear(to-l, teal.500, cyan.100)" bgClip="text">
                                    AJAY{" "}
                                    KANDHARE
                                </Box>
                            </Heading>
                            <Text fontSize="xl" color="gray.200">
                                I am{" "}
                                <TypeAnimation
                                    sequence={[
                                        '',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'Hacker',
                                        1000,
                                        'Software Developer',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
                                    style={{ fontSize: 'xl', display: 'inline-block', fontWeight: 900, fontFamily: 'monospace' }}
                                    repeat={Infinity}
                                    className='typer'
                                />
                            </Text>
                            <Text fontSize="md" color="gray.200" marginTop={2}>
                                Pune, Maharashtra, India
                            </Text>
                            <Text
                                fontSize="md"
                                color="gray.200"
                                textAlign={{ base: "center", md: "left" }}
                                mt={{ base: 2, md: 0 }}
                            >
                                ajaykandhare12@gmail.com |
                                <Box as="br" display={{ base: "block", md: "none" }} />
                                +91 75593 94187
                            </Text>
                            <Text fontSize="md" color="teal.200">
                                <Link href="https://ajay-kandhare.vercel.app" isExternal>
                                    ajay-kandhare.vercel.app
                                </Link>
                            </Text>

                            <Box marginTop={6}>
                                <Heading as="h2" size="lg" fontWeight="bold" color="#fff">
                                    About Me
                                </Heading>
                                <Text fontSize="md" color="gray.200" marginTop={3} textAlign={{ base: "start", md: "start", sm: "center" }}>
                                    Web Developer with a strong foundation in React, Chakra UI, and Material UI. I am passionate about creating secure, responsive, and user-friendly web applications and enjoy leveraging modern technologies to address cybersecurity challenges. Skilled in JavaScript, TypeScript, Node.js, and frontend frameworks, with a focus on problem-solving and adaptability.
                                </Text>
                                <Button
                                    as={Link}
                                    href={CV}
                                    download
                                    colorScheme="teal"
                                    size="md"
                                    mt={5}
                                    style={{ textDecoration: "none" }}
                                    borderRadius={0}
                                >
                                    Download CV
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>

                {/* Right Side - Photo */}
                <Box>
                    <motion.div
                        variants={foggyRightToLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1.05 }}
                        viewport={{ once: true }}
                    >
                        <HoverCard scaleFactor={1.4}>
                            <Box
                                as="img"
                                src={PHOTO1} // Replace with your image URL
                                alt="Ajay Kandhare"
                                borderRadius="0px"
                                boxShadow="dark-lg"
                                width="250px"
                                maxWidth={imageSize} // Adjust image size based on screen size
                                margin="0 auto"
                            />
                        </HoverCard>
                    </motion.div>
                </Box>
            </Grid>
        </Box>
    );
};

export default Introduction;
