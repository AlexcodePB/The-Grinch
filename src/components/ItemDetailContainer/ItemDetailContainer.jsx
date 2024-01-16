import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const {itemId} = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <Center>
      <ItemDetail {...product} />
    </Center>
  );
};

export default ItemDetailContainer;
