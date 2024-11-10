// NotFoundPage.js
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bg="gray.800"
            color="white"
            textAlign="center"
            padding="4"
        >
            <Heading fontSize="6xl" mb="4">404</Heading>
            <Text fontSize="2xl" mb="6">Oops! Page not found.</Text>
            <Text fontSize="lg" mb="8">
                {`The page you're looking for doesn't exist or has been moved.`}
            </Text>
            <Button as={Link} to="/" colorScheme="teal" size="sm">
                Go to Home
            </Button>
        </Box>
    );
}

export default NotFound;
