import React, { useState } from "react";
import { Box, Text, Input, Grid, Image, IconButton, useColorModeValue, VStack, HStack, Heading, Spacer, Flex, Button, Select } from "@chakra-ui/react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const products = [
  {
    id: 1,
    name: "Elegant Dress",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3N8ZW58MHx8fHwxNzExOTYzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Stylish Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1515734674582-29010bb37906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc2hpcnR8ZW58MHx8fHwxNzExOTYzMDM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Diamond Necklace",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2V8ZW58MHx8fHwxNzExOTYzMDQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0fGVufDB8fHx8MTcxMTk2MzA0MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "Gold Earrings",
    price: 79.99,
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Casual Jeans",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1468608312765-da182c3cac11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBqZWFuc3xlbnwwfHx8fDE3MTE5NjMwNDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Fashionista
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Input placeholder="Search products..." value={searchTerm} onChange={handleSearch} />
          <IconButton icon={<FaSearch />} aria-label="Search" variant="outline" />
          <Link to="/cart">
            <IconButton icon={<FaShoppingCart />} aria-label="Cart" variant="outline" />
          </Link>
        </HStack>
      </Flex>

      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} p={6}>
        {filteredProducts.map((product) => (
          <VStack key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden" position="relative">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text fontWeight="bold">${product.price}</Text>
            </Box>
            <IconButton icon={<FaHeart />} aria-label="Favorite" position="absolute" top={2} right={2} variant={favorites.includes(product.id) ? "solid" : "ghost"} colorScheme="red" onClick={() => toggleFavorite(product.id)} />
            <Button onClick={() => addToCart(product)} colorScheme="teal" size="sm" position="absolute" bottom={2} right={2}>
              Add to Cart
            </Button>
          </VStack>
        ))}
      </Grid>

      <Flex as="footer" justify="center" p={6}>
        <Button colorScheme="teal">Load More</Button>
      </Flex>
    </Box>
  );
};

export default Index;
