import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/user/register', formData);
      console.log('Signup successful!', response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Heading as="h2" mb={4}>
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <label>Name:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Box>
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
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
