import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Counter from './components/counter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
      <Counter />
    </Provider>
  );
}

export default App;