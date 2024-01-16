import { Center, SimpleGrid } from '@chakra-ui/react';
import grinch from '../../assets/grinch.webp';
import { useEffect, useState } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const fuente = {
    fontFamily: 'Rubik Scribble',
  };
  const [products, setProducts] = useState([]);
  const [showGreeting, setGreeting] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });

    const timeoutId = setTimeout(() => {
      setGreeting(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [categoryId]);

  return (
    <div>
      {showGreeting && (
        <Center
          fontFamily={'Sans-serif'}
          fontWeight={'bold'}
          fontSize={'4em'}
          h={'100vh'}
          w={'100vw'}
          bg={'tomato'}
          color={'white'}
          position={'absolute'}
          right={'0'}
          top={'0'}
        >
          <SimpleGrid
            columns={1}
            spacing={4}
          >
            <Center>
              <img
                src={grinch}
                alt="grinch"
                width={'200'}
                height={'200'}
              />
            </Center>
            <h1 style={fuente}>{greeting}</h1>
          </SimpleGrid>
        </Center>
      )}

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
