import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Cart
      </Text>
      <VStack align="stretch" spacing={4}>
        {cartItems.map((item, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
          </Box>
        ))}
      </VStack>
      <Text mt={8} fontSize="xl" fontWeight="bold">
        Total Price: ${totalPrice}
      </Text>
    </Box>
  );
};

export default Cart;