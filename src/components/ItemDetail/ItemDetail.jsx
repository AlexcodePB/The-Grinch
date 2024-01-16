import ItemCount from '../ ItemCount/ItemCount';
import {
  Stack,
  CardBody,
  Image,
  Card,
  Text,
  Heading,
  CardFooter,
} from '@chakra-ui/react';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (

      <Card maxW='sm'
      margin='30px 0'
      borderRadius='lg'
      >
        <CardBody
        >
          <Image
            boxSize="400px"
            objectFit="cover"
            src={img}
            alt={name}
            borderRadius="lg"
            margin='0 auto'
          />
          <Stack
            mt="6"
            spacing="3"
          >
            <Heading size="md">{name}</Heading>
            <Text>Categoria: {category}</Text>
            <Text>Descripción: {description}</Text>
            <Text
              color="teal"
              fontSize="2xl"
            >
              ${price}
            </Text>
            <Text> stock disponible: {stock}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}
          />
        </CardFooter>
      </Card>

  );
};

export default ItemDetail;
