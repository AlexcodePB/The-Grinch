import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar title={'The Grinch'} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={'Welcome..!!'} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={'New prducts'} />}
          />
          <Route
            path="/Item/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route
            path="*"
            element={<h1>404 not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
