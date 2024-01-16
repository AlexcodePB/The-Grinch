import './css/itemList.css';
import Item from '../Item/Item.jsx';
import { Grid } from '@chakra-ui/react';

const itemList = ({ products }) => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
        {products.map((prod) => (
          <Item
            key={prod.id}
            {...prod}
          />
        ))}
    </Grid>
  );
};

export default itemList;
