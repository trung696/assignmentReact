import { useState, useEffect } from "react";
import { add, getAll, remove, edit } from "./api/productAPI";
import Routes from "./Routes";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Routes

        data={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
      />
    </>
  );
}
