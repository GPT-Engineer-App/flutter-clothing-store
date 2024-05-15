import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading, Badge, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdC1zaGlydHxlbnwwfHx8fDE3MTU3OTc5Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A classic t-shirt made from 100% cotton.",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3MTU3OTc5Njh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A stylish denim jacket for all seasons.",
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzc3xlbnwwfHx8fDE3MTU3OTc5Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A light and breezy summer dress.",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <HStack justifyContent="space-between" mb={8}>
        <Heading as="h1" size="xl">
          Clothing Brand
        </Heading>
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Badge colorScheme="green">${product.price}</Badge>
              </HStack>
              <Text mb={4}>{product.description}</Text>
              <Button colorScheme="teal" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
