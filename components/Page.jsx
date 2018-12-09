import React from "react";
import Nav from "./Nav";
import Head from "./Head";
import Footer from "../components/Footer";

const Page = props => {
  return (
    <>
      <Head />
      <div className="scroll-disable fade-out">
        <Nav />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Page;
