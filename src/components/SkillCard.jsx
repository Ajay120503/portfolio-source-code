// SkillCard.jsx
import PropTypes from 'prop-types';
import { Box, Heading, HStack, Icon } from '@chakra-ui/react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaJsSquare, FaGithub, FaCode,
    FaBootstrap, FaTools
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
    SiVite, SiMui, SiChakraui,
    SiMongodb,
    SiPhpstorm
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";
import { SiCyberdefenders } from "react-icons/si";
import { motion } from 'framer-motion';
import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";

const foggyLeftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

const SkillCard = ({ title, skills }) => {
    return (
        <Box
            borderWidth={1}
            borderRadius="0px"
            p={4}
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
        >
            <motion.div
                variants={foggyLeftToRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Heading size="md" mb='20px'>{title}</Heading>
                <HoverCard scaleFactor={1.5}>
                    <HStack spacing={4} mt={2} wrap="wrap" justifyContent='space-evenly' >
                        {skills.map((skill) => (
                            <HoverCard scaleFactor={1.5} key={skill}>
                                <Icon as={getSkillIcon(skill)} boxSize={14} color={getSkillColor(skill)} />
                            </HoverCard>
                        ))}
                    </HStack>
                </HoverCard>
            </motion.div>
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
        case 'PHP': return 'green.600'
        case 'VSCode': return 'blue.400';
        case 'Cyber': return 'red.500'
        default: return 'gray.400';
    }
};

// Prop types for SkillCard
SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
