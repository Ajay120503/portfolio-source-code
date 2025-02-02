import { useState } from 'react';
import { Box, Button, Input, Heading, FormLabel, VStack, useToast, Card, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();

    // Ideally, move these credentials to environment variables or a secure vault
    const ADMIN_USERNAME = 'ajayKandhare';
    const ADMIN_PASSWORD = 'ajay@#12';

    const handleLogin = () => {
        if (!username || !password) {
            toast({
                description: "Please enter both username and password.",
                status: 'warning',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
            return;
        }

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
            toast({
                description: "Welcome back, Admin!",
                status: 'success',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
        } else {
            toast({
                description: "Incorrect username or password.",
                status: 'error',
                duration: 3000,
                isClosable: false,
                position: 'top-right'
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleLogin();
    };

    return (
        <Box p={{ base: 4, md: 8 }} h="85vh" my="auto" bg="gray.800" color="white" display="flex" alignItems="center" justifyContent="center">
            {!isLoggedIn ? (
                <VStack spacing={4} width={{ base: '90%', sm: '75%', md: '50%', lg: '35%' }}>
                    <Card color="#fff" p={5} width="100%" textAlign="center" bg="gray.700" boxShadow="dark-lg" borderRadius="0px">
                        <Heading size="lg" mb={4}>Admin Login</Heading>
                        <Box width="100%">
                            <FormLabel>Username</FormLabel>
                            <Input
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={handleKeyDown}
                                bg="gray.700"
                                border="1px solid gray"
                            />
                        </Box>
                        <Box width="100%" mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    bg="gray.700"
                                    border="1px solid gray"
                                />
                                <InputRightElement >
                                    <IconButton
                                        icon={showPassword ? <ViewOffIcon _hover={{ color: '#fff' }} /> : <ViewIcon _hover={{ color: '#fff' }} />}
                                        variant="ghost"
                                        color="gray.500"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        _hover={{ bg: 'none' }}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Button mt={5} onClick={handleLogin} colorScheme="teal" width="100%">Login</Button>
                    </Card>
                </VStack>
            ) : (
                <Box textAlign="center">
                    <Heading size="lg" mb={4}>Welcome, Admin!</Heading>
                </Box>
            )}
        </Box>
    );
};

export default Admin;
