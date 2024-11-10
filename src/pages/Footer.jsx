// Footer.jsx
import { Box, Flex, Stack, Link, Text, IconButton, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Box as="footer" bg="black" color="gray.300" py={5}>
            <Flex
                direction={["column", "row"]}
                justify="space-between"
                align="center"
                w={{ md: "98vw" }}
                px="10px"
                wrap="wrap"
                textAlign={["center", "left"]}
            >
                {/* Quick Links Section */}
                <Stack spacing={3} mb={[6, 0]}>
                    <Text color="gray.500" fontSize="2xl" fontWeight="bold">Quick Links</Text>
                    <Link href="/about" _hover={{ color: "cyan.300" }}>About Us</Link>
                    <Link href="/contact" _hover={{ color: "cyan.300" }}>Contact</Link>
                </Stack>

                {/* Social Media Section */}
                <Stack spacing={4} mb={[6, 0]} align="center">
                    <Text color="gray.500" fontSize="2xl" fontWeight="bold">Follow Us</Text>
                    <Flex justify="center">
                        <IconButton
                            as="a"
                            href="https://facebook.com"
                            aria-label="Facebook"
                            icon={<FaFacebook color="gray" />}
                            variant="ghost"
                            colorScheme="gray"
                            mx={{ base: 1, md: 5 }}
                            fontSize="35px"
                            target="_blank"
                            _hover={{ bg: "gray.900" }}
                        />
                        <IconButton
                            as="a"
                            href="https://twitter.com"
                            aria-label="Twitter"
                            icon={<FaTwitter color="gray" />}
                            variant="ghost"
                            colorScheme="gray"
                            mx={{ base: 1, md: 5 }}
                            fontSize="35px"
                            target="_blank"
                            _hover={{ bg: "gray.900" }}
                        />
                        <IconButton
                            as="a"
                            href="https://linkedin.com"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin color="gray" />}
                            variant="ghost"
                            colorScheme="gray"
                            mx={{ base: 1, md: 5 }}
                            fontSize="35px"
                            target="_blank"
                            _hover={{ bg: "gray.900" }}
                        />
                        <IconButton
                            as="a"
                            href="https://github.com/Ajay120503"
                            aria-label="GitHub"
                            icon={<FaGithub color="gray" />}
                            variant="ghost"
                            colorScheme="gray"
                            mx={{ base: 1, md: 5 }}
                            fontSize="35px"
                            target="_blank"
                            _hover={{ bg: "gray.900" }}
                        />
                    </Flex>
                </Stack>

                {/* Contact Section */}
                <Stack spacing={3} textAlign={["center", "right"]}>
                    <Text color="gray.500" fontSize="2xl" fontWeight="bold">Contact Us</Text>
                    <Text>Email: ajaykandhare12@gmail.com</Text>
                    <Text>Phone: +91 7559394197</Text>
                    <Text>Address: Pune,Kothrud-411038</Text>
                </Stack>
            </Flex>

            {/* Divider and Copyright */}
            <Divider my={3} borderColor="gray.600" />
            <Text fontSize="md" textAlign="center" color="gray.500">
                © {new Date().getFullYear()} Ajay Ganesh Kandhare. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
