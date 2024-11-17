// ProjectCard.jsx
import PropTypes from 'prop-types';
import { Box, Heading, Text, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, techStack, link, source, img }) => {

    const foggyRightToLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <Box
            borderWidth={1}
            borderRadius="0px"
            p={[4, 6]} // Responsive padding
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
                variants={foggyRightToLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <a href={img} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={img}
                        alt={`${title} Project Screenshot`}
                        boxSize="100%"
                        objectFit="cover"
                        borderRadius="0px"
                        mb={4}
                    />
                </a>
                <Heading size="md" fontSize={['md', 'lg']}>{title}</Heading>
                <Text mt={2} fontSize={['sm', 'md']}>{description}</Text>
                <Text color="gray.400" mt={1} fontSize="sm">Tech Stack: {techStack}</Text>
                {link && (
                    <Text mt={1} fontSize="sm">
                        <Text color="teal.200" mt={3}>
                            <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Project link to ${title}`}>
                                Project Link
                            </Link>
                        </Text>
                        <Text color="orange.300" mt={3}>
                            <Link href={source} target="_blank" rel="noopener noreferrer" aria-label={`Project link to ${title}`}>
                                Source Code
                            </Link>
                        </Text>
                    </Text>
                )}
            </motion.div>
        </Box>
    );
};

// Prop types for ProjectCard
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    link: PropTypes.string,
    source: PropTypes.string,
    img: PropTypes.string,
};

export default ProjectCard;
