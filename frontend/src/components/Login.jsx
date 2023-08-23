import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/user/login', formData);
      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem('token', token);

      console.log('Login successful!', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Heading as="h2" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <label>Email:</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <Box mb={4}>
          <label>Password:</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button type="submit" colorScheme="blue">
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
