import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Categories from "../components/Category";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
