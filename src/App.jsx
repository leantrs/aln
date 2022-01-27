import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductList1 from "./pages/ProductList1";
import ProductList2 from "./pages/ProductList2";
import ProductList3 from "./pages/ProductList3";
import ProductList4 from "./pages/ProductList4";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductList1" element={<ProductList1 />} />
          <Route path="/ProductList2" element={<ProductList2 />} />
          <Route path="/ProductList3" element={<ProductList3 />} />
          <Route path="/ProductList4" element={<ProductList4 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />

          {/*<Route path="*" element={<Home />} />*/}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
