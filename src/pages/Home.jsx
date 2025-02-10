import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import { Box, Heading, Flex, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import EducationTimeline from '../components/EducationTimeline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Introduction from '../components/Introduction';
import MMCC from '../../public/MMCC.png'
import WEBHUB from '../../public/WEBHUB.png'
import CODERHUB from '../../public/CODERHUB.png'
import CODEBOX from '../../public/CODEBOX.png'
import RandChat from '../../public/RandChat.png'
import Footer from './Footer';
import Experience from './Experience';
import ScrollButton from '../components/ScrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function Home() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2', // Add your custom primary color
            },
            grey: {
                500: '#9e9e9e', // Define grey if needed
            },
        },
    });

    const skills = {
        'Frontend Development': ['React', 'HTML', 'CSS', 'JavaScript', 'Chakra UI', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'Vite'],
        'Backend Development': ['Node.js', 'REST APIs', 'MongoDB', 'PHP'],
        'Tools & Version Control': ['Git', 'GitHub', 'VSCode'],
        'Other Skills': ['Problem Solving', 'Cybersecurity Awareness', 'Collaboration', 'Adaptability', 'Cyber'],
    };

    const projects = [
        {
            title: 'Coder HUB',
            description: 'A collaborative web application allowing multiple users to edit code in real-time, with changes instantly reflected on all users\' screens.',
            techStack: 'React, Node.js, Chakra UI, Vite',
            link: `https://coder-hub-beta.vercel.app`,
            source: `https://github.com/Ajay120503/coder-hub-source-code.git`,
            img: CODERHUB
        },
        {
            title: 'IoT-Based Plant Monitoring System',
            description: 'An IoT-based solution designed to collect real-time environmental and plant health data to optimize growth and detect anomalies.',
            techStack: 'IoT, Sensors, Data Analysis',
            link: '',
            source: ``,
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'MMCC Website Clone',
            description: `Developed a responsive clone of the MMCC website, focusing on accessibility and design accuracy.`,
            techStack: 'React, Node.js, Chakra UI, Vite',
            link: `https://mmcc-edu-in.vercel.app`,
            source: `https://github.com/Ajay120503/mmcc.edu.in.git`,
            img: MMCC
        },
        {
            title: 'Web HUB',
            description: 'A dynamic web platform designed to centralize resources, tools, and tutorials for web development. It offers users a seamless experience with a focus on accessibility, modern design, and ease of navigation.',
            techStack: 'HTML, CSS, JavaScript',
            link: `https://web-hub-alpha.vercel.app`,
            source: `https://github.com/Ajay120503/web-hub-source-code.git`,
            img: WEBHUB
        },
        {
            title: 'Code Box',
            description: 'A dynamic web platform designed to centralize resources,store your codes and source code.',
            techStack: 'React, Node.js, Chakra UI, Vite',
            link: `https://code-box-alpha.vercel.app`,
            source: `https://github.com/Ajay120503/Code-Box-Source-Code`,
            img: CODEBOX
        },
        {
            title: 'Random Chat',
            description: 'Random Chat is an interactive web application designed to faster real-time communication and collaboration.',
            techStack: 'React, Node.js, Chakra UI, Vite',
            link: `https://random-chat-alpha.vercel.app`,
            source: `https://github.com/Ajay120503/random-chat-code-source.git`,
            img: RandChat
        },
    ];

    const experiences = [
        {
            title: "Software Engineer",
            company: "Tech Company",
            date: "Jan 2023 - Present",
            description: "Developed and maintained web applications, collaborated with cross-functional teams."
        },
        {
            title: "Frontend Developer Intern",
            company: "Startup Inc.",
            date: "Jun 2021 - Dec 2022",
            description: "Worked on UI/UX design improvements and optimized web applications for better performance."
        },
        // Add more experiences here
    ];

    const foggyLeftToRight = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    const foggyRightToLeft = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Box maxW="1250px" bg="gray.800" mx="auto" color="white" overflow="hidden" >
                <Box h='10vh' mb={5}>
                    <Navbar />
                </Box>

                <Box>
                    <Introduction />
                </Box>
                <Divider my={10} borderColor="gray.200" />
                {/* Projects Section */}
                <Box mt={50} id='projects'>
                    <Heading pl={5} as="h2" size="lg" mb={5} textAlign={{ base: "center", lg: "start" }}>
                        Projects
                    </Heading>
                    <motion.div
                        variants={foggyRightToLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Flex wrap="wrap" justifyContent='center'>
                            {projects.map((project, index) => (
                                <Box display='flex' justifyContent='center' key={index} mx={2} mb={4} flexBasis={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}>
                                    <ProjectCard {...project} />
                                </Box>
                            ))}
                        </Flex>
                    </motion.div>
                </Box>
                <Divider my={10} borderColor="gray.200" />
                {/* Skills Section */}
                <Box mt={50} id='skills'>
                    <Heading pl={5} as="h2" size="lg" mb={5} textAlign={{ base: "center", lg: "start" }}>
                        Skills
                    </Heading>
                    <motion.div
                        variants={foggyLeftToRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Flex wrap="wrap" justifyContent='center'>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <Box display='flex' justifyContent='center' key={category} mx={2} mb={4} flexBasis={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}>
                                    <SkillCard title={category} skills={skillList} />
                                </Box>
                            ))}
                        </Flex>
                    </motion.div>
                </Box>
                <Divider my={10} borderColor="gray.200" />
                <Box display="flex" justifyContent="flex-start" padding={{ base: 5, md: 0 }}>
                    <Box width="100%" maxWidth="1200px">
                        <Heading pl={5} as="h2" size="lg" mb={5} textAlign={{ base: "center", lg: "start" }}>
                            Education
                        </Heading>
                        <ThemeProvider theme={theme}>
                            <EducationTimeline />
                        </ThemeProvider>
                    </Box>
                </Box>
                <Divider my={10} borderColor="gray.200" />
                <Box>
                    <Experience experiences={experiences} />
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
            <ScrollButton />
        </>
    );
}

export default Home;
