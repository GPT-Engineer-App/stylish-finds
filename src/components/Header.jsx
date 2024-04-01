import React from "react";
import { Flex, Heading, Spacer, HStack, Input, IconButton } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ searchTerm, onSearch }) => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="gray.100">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Fashionista
      </Heading>
      <Spacer />
      <HStack spacing={4}>
        <Input placeholder="Search products..." value={searchTerm} onChange={onSearch} />
        <IconButton icon={<FaSearch />} aria-label="Search" variant="outline" />
        <Link to="/cart">
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" variant="outline" />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
