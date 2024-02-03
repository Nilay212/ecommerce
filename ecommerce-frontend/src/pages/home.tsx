// import React from "react";
import { Link } from "react-router-dom";
import Productcard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <Productcard
          productId="lksjds"
          name="macbook"
          price={4949}
          handler={addToCartHandler}
          stock={30}
          photo="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360"
        />
      </main>
    </div>
  );
};

export default Home;
