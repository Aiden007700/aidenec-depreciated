import React from "react";
import Nav from "./Nav";
import Head from "./Head";
import Footer from "../components/Footer";
import styled from "styled-components";

const Grid = styled.div`
  display: grid !important;
  grid-template-columns: 30% 1fr !important;
  grid-template-rows: 100% !important;

  .nav {
    grid-column: 1 / 2 !important;
  }

  .content {
    grid-column: 2 / 3 !important;
  }

  @media only screen and (max-width: 700px) {
    .content {
      grid-column: 1 / 3 !important;
    }
  }
`;

const Page = props => {
  return (
    <>
      <Head />
      <Grid className="scroll-disable fade-out">
        <Nav className="nav" />
        <div className="content">{props.children}</div>
        <Footer />
      </Grid>
    </>
  );
};

export default Page;
