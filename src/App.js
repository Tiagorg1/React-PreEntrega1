import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Form from "./Form/Form";
import CartContextProvider from "./Context/CartContext";
function App() {
  

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="Form" element={<Form />} />
          <Route path="*" element={<h1> Error 404: Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
