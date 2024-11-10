import { Box, Button, Icon } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ScrollButton = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Check if user is at the bottom of the page
    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
            setIsAtBottom(isBottom);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle scroll between top and bottom
    const toggleScroll = () => {
        if (isAtBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <Box position="fixed" bottom="10px" right="10px">
            <Button
                onClick={toggleScroll}
                colorScheme="teal"
                size="sm"
                borderRadius="full"
                aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
                h={9}
                w={9}
            >
                <Icon as={isAtBottom ? FaArrowUp : FaArrowDown} />
            </Button>
        </Box>
    );
};

export default ScrollButton;
