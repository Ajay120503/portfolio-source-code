import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, useToast, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name) {
            toast({
                description: 'Name is required.',
                status: 'error',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
            return false;
        }
        if (!formData.email) {
            toast({
                description: 'Email is required.',
                status: 'error',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
            return false;
        }
        if (!formData.message) {
            toast({
                description: 'Message is required.',
                status: 'error',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast({
                title: 'Message sent!',
                description: 'We will get back to you soon.',
                status: 'success',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
            // Reset form data after submission
            setFormData({ name: '', email: '', message: '' });
            // Add any other submission logic here, such as sending data to an API
        }
    };

    return (
        <Box
            maxW={{ base: "90%", sm: "80%", md: "600px" }} // Responsive max width
            mx="auto"
            p={6}
            mt={20}
            borderRadius="0px"
            boxShadow="dark-lg"
            bg="gray.700"
            color="white"
        >
            <Heading as="h2" size="lg" textAlign="center" mb={6}>
                Contact Me
            </Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl >
                        <FormLabel>Name <Text as="span" color="orange">*</Text></FormLabel>
                        <Input
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            bg="gray.700"
                            style={{ border: "1px solid gray" }}
                        />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Email <Text as="span" color="orange">*</Text></FormLabel>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            bg="gray.700"
                            style={{ border: "1px solid gray" }}
                        />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Message <Text as="span" color="orange">*</Text></FormLabel>
                        <Textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            bg="gray.700"
                            style={{ border: "1px solid gray" }}
                        />
                    </FormControl>
                    <Button colorScheme="teal" type="submit" width="full">
                        Send Message
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}

export default Contact;
