import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  GridItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({ id, name, img, price, stock }) => {
  return (
    <GridItem
    w='100%'
    h='100%'
    >
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize='300px'
          objectFit='cover'
          src={img}
          alt={name}
          borderRadius="lg"
        />
        <Stack
          mt="6"
          spacing="3"
        >
          <Heading size="md">{name}</Heading>

          <Text
            color="teal"
            fontSize="2xl"
          >
            ${price}
          </Text>
          <Text> stock disponible: {stock}</Text>
        </Stack>
      </CardBody>
      <CardFooter
      justifyContent='center'
      alignItems='center'
      >
     
          <Button
            variant="solid"
            colorScheme="teal"
            w='100%'
          >
            <Link to={`/Item/${id}`} >
            Ver detalle
            </Link>
          </Button>
        
      </CardFooter>
    </Card>
    </GridItem>
  );
};
export default Item;
