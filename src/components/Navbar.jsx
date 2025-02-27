import {
    Box,
    Link,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    IconButton,
    CloseButton,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const breadcrumbHoverStyle = {
    position: "relative",
    _hover: {
        textDecoration: 'none',
        _after: {
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "gray.600",
            transform: "scaleX(1)",
            transformOrigin: "left",
            transition: "transform 0.5s ease-out",
            zIndex: -1,
        },
        color: "white",
    },
    _after: {
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "gray.600",
        transform: "scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.5s ease-out",
        zIndex: -1,
    },
};


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MotionBox
                as="nav"
                bg="black"
                p={2}
                display={{ base: 'none', md: 'flex' }}
                justifyContent="space-between"
                alignItems="center"
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex={1000}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.05, ease: 'easeOut' }}
            >
                <Box
                    as="nav"
                    bg="black"
                    p={2}
                    display={{ base: 'none', md: 'flex' }} // Hide on small screens
                    justifyContent="space-between"
                    alignItems="center"
                    position="fixed"
                    top={0}
                    left={0}
                    right={0}
                    zIndex={1000}
                >
                    <Box w={{ base: '100%', md: '20%' }}>
                        <Avatar
                            name="Ajay Kandhare"
                            // src={ProfilePhoto} // Replace with your image URL
                            boxSize="50px" // Set the size of the avatar
                            borderRadius="full" // Set to 'full' for circular edges
                            color="#fff"
                            bg="gray.700"
                            fontWeight={900}

                        />
                    </Box>
                    <Box
                        w={{ base: '100%', md: '80%' }}
                        display="flex"
                        flexDirection={{ base: 'column', md: 'row' }}
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Breadcrumb separator="" spacing="4">
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/about" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    About
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/skills" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    Skills
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/projects" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    Projects
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/contact" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    Contact
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={RouterLink} to="/admin" color="white" fontWeight="bold" {...breadcrumbHoverStyle} px={3}>
                                    Admin
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                </Box>
            </MotionBox>

            {/* Hamburger icon for small screens */}
            <Box
                position="fixed"
                top="0px"
                right="0px"
                display={{ base: 'flex', md: 'none' }}
                justifyContent="flex-end"
                p={4}
                zIndex={100}
            >
                <IconButton
                    icon={<HamburgerIcon color="gray" />}
                    variant="outline"
                    colorScheme="gray"
                    onClick={onOpen}
                    aria-label="Open Menu"
                    _hover={{ bg: "gray.900" }}
                    borderColor="gray"
                />
            </Box>

            {/* Drawer for small screens */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md" >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerHeader bg="gray.900" color="white" display="flex" justifyContent="space-between" alignItems="center">
                        <Avatar
                            name="Ajay Kandhare"
                            // src={ProfilePhoto} // Replace with your image URL
                            boxSize="50px" // Set the size of the avatar
                            borderRadius="full" // Set to 'full' for circular edges
                            color="#fff"
                            bg="gray.700"
                            fontWeight={900}
                        />
                        <CloseButton color="white" onClick={onClose} />
                    </DrawerHeader>
                    <DrawerBody bg="gray.800" color="white" display="flex" flexDirection="column" p={0}>
                        <Link py={2} href="/" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>Home</Link>
                        <Link py={2} as={RouterLink} to="/about" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>
                            About
                        </Link>
                        <Link py={2} as={RouterLink} to="/contact" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>
                            Contact
                        </Link>
                        <Link py={2} as={RouterLink} to="/admin" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>
                            Admin
                        </Link>
                        <Link py={2} as={RouterLink} to="/skills" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>
                            Skills
                        </Link>
                        <Link py={2} as={RouterLink} to="/projects" color="white" fontWeight="bold" pl={5} _hover={{ bg: 'gray.700', textDecoration: 'none' }}>
                            Projects
                        </Link>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
