// SkillCard.jsx
import { Box, Heading, Wrap, WrapItem, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
    FaGithub, FaCode, FaBootstrap, FaTools
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
    SiVite, SiMui, SiChakraui, SiMongodb, SiPhpstorm, SiCyberdefenders
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import BackButton from '../components/BackButton';

const foggyLeftToRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

// Predefined skills object
const skills = {
    'Frontend Development': ['React', 'HTML', 'CSS', 'JavaScript', 'Chakra UI', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'Vite'],
    'Backend Development': ['Node.js', 'REST APIs', 'MongoDB', 'PHP'],
    'Tools & Version Control': ['Git', 'GitHub', 'VSCode'],
    'Other Skills': ['Problem Solving', 'Cybersecurity Awareness', 'Collaboration', 'Adaptability', 'Cyber'],
};

const Skills = () => {
    return (
        <Box p={2} maxWidth="100%" overflow="hidden">
            <Box textAlign={{ base: "center", lg: "start" }} position="fixed" bg="gray.900" w="100vw" top={0} left={0}>
                <Heading id='skills' as="h2" size="lg" m="10px 0 10px 10px">
                    Skills
                </Heading>
            </Box>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent={{ base: "center", lg: "space-between" }}
                alignItems={{ base: "center", lg: "start" }}
                px={{ base: 2, md: 6 }}
                mt={20}
            >
                {Object.entries(skills).map(([category, skillList]) => (
                    <Box
                        key={category}
                        borderWidth={1}
                        borderRadius="0px"
                        p={4}
                        bg="gray.700"
                        _hover={{ transform: 'scale(1.05)', transition: '0.1s' }}
                        width={{ base: "100%", sm: "48%", md: "45%", lg: "20%" }}
                        boxShadow="dark-lg"
                        border="1px solid #ffffff29"
                        minH="250px"
                        m={2}
                    >
                        <motion.div
                            variants={foggyLeftToRight}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Heading size="md" mb={4} textAlign="center">{category}</Heading>
                            <Wrap spacing={4} mt={2} justify="center">
                                {skillList.map((skill) => (
                                    <WrapItem key={skill}>
                                        <Icon as={getSkillIcon(skill)} boxSize={10} color={getSkillColor(skill)} />
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </motion.div>
                    </Box>
                ))}
            </Box>
            <Box>
                <BackButton />
            </Box>
        </Box>
    );
};

// Function to get the appropriate icon for each skill
const getSkillIcon = (skill) => {
    switch (skill) {
        case 'React': return FaReact;
        case 'Node.js': return FaNodeJs;
        case 'HTML': return FaHtml5;
        case 'CSS': return FaCss3Alt;
        case 'JavaScript': return FaJsSquare;
        case 'GitHub': return FaGithub;
        case 'Git': return FiGithub;
        case 'Cybersecurity Awareness': return FaCode;
        case 'Collaboration': return FaPeopleGroup;
        case 'Tailwind CSS': return RiTailwindCssFill;
        case 'Vite': return SiVite;
        case 'Bootstrap': return FaBootstrap;
        case 'Material UI': return SiMui;
        case 'Chakra UI': return SiChakraui;
        case 'Adaptability': return GiSkills;
        case 'MongoDB': return SiMongodb;
        case 'PHP': return SiPhpstorm;
        case 'VSCode': return VscVscode;
        case 'Cyber': return SiCyberdefenders;
        default: return FaTools;
    }
};

// Function to get the color for each skill icon
const getSkillColor = (skill) => {
    switch (skill) {
        case 'React': return 'blue.400';
        case 'Node.js': return 'green.400';
        case 'HTML': return 'orange.500';
        case 'CSS': return 'blue.600';
        case 'JavaScript': return 'yellow.400';
        case 'GitHub': return 'gray.200';
        case 'Git': return 'red.400';
        case 'Cybersecurity Awareness': return 'teal.400';
        case 'Collaboration': return 'purple.400';
        case 'Tailwind CSS': return 'cyan.500';
        case 'Vite': return 'orange.400';
        case 'Bootstrap': return 'purple.500';
        case 'Material UI': return 'blue.300';
        case 'Chakra UI': return 'teal.300';
        case 'Adaptability': return 'yellow.500';
        case 'MongoDB': return 'blue.500';
        case 'PHP': return 'green.600';
        case 'VSCode': return 'blue.400';
        case 'Cyber': return 'red.500';
        default: return 'gray.400';
    }
};

export default Skills;
