import './css/itemCount.css';
import { Button, Box, Flex, Center } from '@chakra-ui/react';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box 
    w="100%"
    >
      <Flex
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
        gap='2'
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="60%"
          padding='0 20px '
        >
          <Button
            colorScheme="teal"
            variant="outline"
            w="auto"
            h="auto"
            fontWeight={'bold'}
            onClick={decrement}
            fontSize="1.3em"
            display="flex"
          >
            <Center>
              -
            </Center>
          </Button>
          <p>{quantity}</p>
          <Button
            colorScheme="teal"
            variant="outline"
            w="auto"
            h="auto"
            fontWeight={'bold'}
            onClick={increment}
            fontSize="1.3em"
          >
            <Center>
              +
            </Center>
          </Button>
        </Flex>

        <Box>
          <Button
            colorScheme="teal"
            variant="solid"
            w='100%'
            fontWeight={'bold'}
            onClick={() => onAdd(quantity)}
            isDisabled={!stock}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCount;
