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
import ProfilePhoto from '../../public/profilePhoto.jpg';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
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
                        src={ProfilePhoto} // Replace with your image URL
                        boxSize="50px" // Set the size of the avatar
                        borderRadius="full" // Set to 'full' for circular edges
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
                            <BreadcrumbLink as={RouterLink} to="/" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={RouterLink} to="/about" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                About
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#skills" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                Skills
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#projects" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                Projects
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={RouterLink} to="/contact" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                Contact
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={RouterLink} to="/admin" color="white" fontWeight="bold" _hover={{ bg: 'gray.700', textDecoration: 'none' }} px={3}>
                                Admin
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>

            </Box>

            {/* Hamburger icon for small screens */}
            <Box display={{ base: 'flex', md: 'none' }} justifyContent="flex-end" p={4}>
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
                        <span>Menu</span>
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
