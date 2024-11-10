// Experience.jsx
import PropTypes from 'prop-types';
import { Box, Heading, Text, VStack, HStack, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Experience = ({ experiences }) => {

    const foggyLeftToRight = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    const foggyRightToLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <Box bg="gray.800" color="white" p={[4, 6, 6]} borderRadius="md">
            <Heading as="h2" size="lg" mb={10} textAlign={{ base: "center", md: "start" }}>
                Experience
            </Heading>
            <motion.div
                variants={foggyRightToLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <VStack spacing={8} align="start">
                    {experiences.map((experience, index) => (

                        <Box w="100%" key={index}>
                            <motion.div
                                variants={foggyLeftToRight}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <HStack justify="space-between" align="start" wrap="wrap">
                                    <Heading size="md" fontSize={['md', 'lg']}>
                                        {experience.title}
                                    </Heading>
                                    <Text fontSize={['xs', 'sm']} color="gray.400">
                                        {experience.date}
                                    </Text>
                                </HStack>
                            </motion.div>
                            <Text fontSize={['sm', 'md']} color="teal.300" mt={1}>
                                {experience.company}
                            </Text>
                            <Text fontSize={['sm', 'md']} mt={2}>
                                {experience.description}
                            </Text>
                            {index < experiences.length - 1 && <Divider mt={4} borderColor="gray.700" />}
                        </Box>
                    ))}
                </VStack>
            </motion.div>
        </Box>
    );
};

// Define prop types for Experience
Experience.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Experience;
