import { Box, Heading, Text, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MMCC from '../../public/MMCC.png';
import WEBHUB from '../../public/WEBHUB.png';
import CODERHUB from '../../public/CODERHUB.png';
import CODEBOX from '../../public/CODEBOX.png'

const projects = [
    {
        title: 'Coder HUB',
        description: 'A collaborative web application allowing multiple users to edit code in real-time, with changes instantly reflected on all users\' screens.',
        techStack: 'React, Node.js, Chakra UI, Vite',
        link: `https://coder-hub-beta.vercel.app`,
        source: `https://github.com/Ajay120503/coder-hub-source-code.git`,
        img: CODERHUB,
    },
    {
        title: 'IoT-Based Plant Monitoring System',
        description: 'An IoT-based solution designed to collect real-time environmental and plant health data to optimize growth and detect anomalies.',
        techStack: 'IoT, Sensors, Data Analysis',
        link: '',
        source: '',
        img: 'https://via.placeholder.com/150',
    },
    {
        title: 'MMCC Website Clone',
        description: 'Developed a responsive clone of the MMCC website, focusing on accessibility and design accuracy.',
        techStack: 'React, Node.js, Chakra UI, Vite',
        link: `https://mmcc-edu-in.vercel.app`,
        source: `https://github.com/Ajay120503/mmcc.edu.in.git`,
        img: MMCC,
    },
    {
        title: 'Web HUB',
        description: 'A dynamic web platform designed to centralize resources, tools, and tutorials for web development, offering users a seamless experience.',
        techStack: 'HTML, CSS, JavaScript',
        link: `https://web-hub-alpha.vercel.app`,
        source: `https://github.com/Ajay120503/web-hub-source-code.git`,
        img: WEBHUB,
    },
    {
        title: 'Code Box',
        description: 'A dynamic web platform designed to centralize resources,store your codes and source code.',
        techStack: 'React, Node.js, Chakra UI, Vite',
        link: `https://code-box-alpha.vercel.app`,
        source: `https://github.com/Ajay120503/Code-Box-Source-Code.git`,
        img: CODEBOX
    }
];

const Projects = () => {
    const foggyRightToLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <Box maxWidth="100%" overflow="hidden">
            <Box textAlign={{ base: "center", lg: "start" }} position="fixed" bg="gray.900" w="100vw" top={0} left={0}>
                <Heading id='skills' as="h2" size="lg" m="10px 0 10px 10px">
                    Projects
                </Heading>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center" mt={10}>
                {projects.map((project) => (
                    <Box
                        key={project.title}
                        borderWidth={1}
                        borderRadius="0px"
                        p={[4, 6]}
                        bg="gray.700"
                        _hover={{
                            transform: 'scale(1.05)',
                            transition: '0.2s',
                            boxShadow: 'md',
                        }}
                        maxWidth="300px"
                        flexGrow={1}
                        boxShadow="dark-lg"
                        border="1px solid #ffffff29"
                        m={4}
                    >
                        <motion.div
                            variants={foggyRightToLeft}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <a href={project.img} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={project.img}
                                    alt={`${project.title} Project Screenshot`}
                                    boxSize="100%"
                                    objectFit="cover"
                                    borderRadius="0px"
                                    mb={4}
                                />
                            </a>
                            <Heading size="md" fontSize={['md', 'lg']}>
                                {project.title}
                            </Heading>
                            <Text mt={2} fontSize={['sm', 'md']}>
                                {project.description}
                            </Text>
                            <Text color="gray.400" mt={1} fontSize="sm">
                                Tech Stack: {project.techStack}
                            </Text>
                            {project.link && (
                                <Text mt={1} fontSize="sm">
                                    <Text color="teal.200" mt={3}>
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                            Project Link
                                        </Link>
                                    </Text>
                                    <Text color="orange.300" mt={3}>
                                        <Link href={project.source} target="_blank" rel="noopener noreferrer">
                                            Source Code
                                        </Link>
                                    </Text>
                                </Text>
                            )}
                        </motion.div>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
