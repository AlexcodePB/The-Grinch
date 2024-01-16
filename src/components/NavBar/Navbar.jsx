import CartWidget from '../CartWidget/CardWidget';
import { Button, Flex, Box, Stack, Heading } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Box>
          <Link to="/">
            <Heading
              bg="teal"
              color="white"
              fontWeight="bold"
              fontFamily="Permanent Marker"
              textAlign="center"
              h="100%"
              w="400px"
              as="h1"
            >
              {title}
            </Heading>
          </Link>
        </Box>
        <Box>
          <Stack
            spacing={3}
            direction="row"
            align="center"
            h="100%"
            w="400px"
          >
            <Button
              colorScheme="teal"
              variant="ghost"
              w="auto"
              fontWeight="bold"
              h="100%"
            >
              <NavLink to={`/category/trees`}>TREES</NavLink>
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              w="auto"
              fontWeight="bold"
              h="100%"
            >
              <NavLink to={`/category/garlands`}>GARLANDS</NavLink>
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              w="auto"
              fontWeight="bold"
              h="100%"
            >
              <NavLink to={`/category/decoration`}>DECORATION</NavLink>
            </Button>
          </Stack>
        </Box>
        <Box
          w="325px"
          h="100%"
        >
          <CartWidget />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
