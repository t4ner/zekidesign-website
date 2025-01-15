import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
