import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import listarProdutos from "../services/listarProdutos";
import { useDispatch } from "react-redux";
import signIn from "../actions/listaActions";
import cartkrn from "../actions/cartAction";

const Home = () => {
  const dispatch = useDispatch();

  const [lista, setLista] = useState(null);
  const [std, setStd] = useState(true);

  useEffect(
    () => {
      krn();

      buscarP();
    }, // eslint-disable-next-line
    [std === true]
  );

  async function krn() {
    const keys = Object.keys(localStorage);

    const rec = keys.filter(checkar);

    function checkar(k) {
      return k !== "pass";
    }

    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });

    if (recx !== null) {
      dispatch(cartkrn(recx));
    }
  }

  async function buscarP() {
    const rec = await listarProdutos();
    setLista(rec);

    if (lista !== null) {
      await dispatch(signIn(lista));
    }
    setStd(false);
  }

  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
